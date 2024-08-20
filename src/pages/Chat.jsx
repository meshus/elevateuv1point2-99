import React, { useState } from 'react';
import { Avatar } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Send, Mic, Image, Smile, Search } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';

const ChatList = ({ chats, onSelectChat }) => (
  <div className="divide-y">
    {chats.map((chat) => (
      <div key={chat.id} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer" onClick={() => onSelectChat(chat)}>
        <Avatar src={chat.avatar} alt={chat.name} className="h-12 w-12 mr-4" />
        <div className="flex-grow">
          <h3 className="font-semibold">{chat.name}</h3>
          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
        </div>
        <span className="text-xs text-gray-500">{chat.time}</span>
      </div>
    ))}
  </div>
);

const ChatMessage = ({ content, isSent, timestamp }) => (
  <div className={`flex ${isSent ? 'justify-end' : 'justify-start'} mb-2`}>
    <div
      className={`max-w-[70%] p-3 rounded-lg ${
        isSent ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
      <p>{content}</p>
      <p className="text-xs mt-1 opacity-70">{timestamp}</p>
    </div>
  </div>
);

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const chats = [
    { id: 1, name: 'John Doe', avatar: 'https://example.com/avatar1.jpg', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Jane Smith', avatar: 'https://example.com/avatar2.jpg', lastMessage: 'See you tomorrow!', time: 'Yesterday' },
    { id: 3, name: 'Mike Johnson', avatar: 'https://example.com/avatar3.jpg', lastMessage: 'Thanks for the help!', time: '2 days ago' },
  ];

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setMessages([
      { content: 'Hey, how are you?', isSent: false, timestamp: '10:30 AM' },
      { content: "I'm good, thanks! How about you?", isSent: true, timestamp: '10:32 AM' },
    ]);
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { content: newMessage, isSent: true, timestamp: new Date().toLocaleTimeString() },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title={selectedChat ? selectedChat.name : "Messages"} showBackButton={true} />
      {!selectedChat ? (
        <div className="flex-grow overflow-y-auto">
          <div className="p-4">
            <div className="relative mb-4">
              <Input placeholder="Search messages" className="pl-10 pr-4 py-2" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <Button className="w-full mb-4">New Message</Button>
          </div>
          <ChatList chats={chats} onSelectChat={handleSelectChat} />
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto p-4 pb-20">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
        </div>
      )}
      {selectedChat && (
        <div className="bg-white p-4 border-t fixed bottom-0 left-0 right-0">
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Image className="h-6 w-6" />
            </Button>
            <Input
              className="flex-grow mx-2"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button variant="ghost" size="icon">
              <Smile className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mic className="h-6 w-6" />
            </Button>
            <Button onClick={handleSend} disabled={!newMessage.trim()}>
              <Send className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
      <BottomNavigation />
    </div>
  );
};

export default Chat;