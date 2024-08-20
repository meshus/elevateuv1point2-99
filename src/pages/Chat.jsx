import React, { useState } from 'react';
import { Avatar } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Send, Mic, Image, Smile } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

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
  const [messages, setMessages] = useState([
    { content: 'Hey, how are you?', isSent: false, timestamp: '10:30 AM' },
    { content: "I'm good, thanks! How about you?", isSent: true, timestamp: '10:32 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

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
      <Header title="Chat" showBackButton={true} />
      <div className="flex-grow overflow-y-auto p-4 pb-20">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
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
      <BottomNavigation />
    </div>
  );
};

export default Chat;