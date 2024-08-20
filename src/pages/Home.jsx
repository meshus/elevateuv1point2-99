import React, { useState } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNavigation from '../components/BottomNavigation';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: 'Jane Doe', username: 'janedoe21', avatar: 'https://example.com/avatar1.jpg' },
      content: 'Enjoying a beautiful day at the park! 🌳☀️',
      image: 'https://source.unsplash.com/random/800x600?park',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 3,
    },
    {
      id: 2,
      user: { name: 'John Smith', username: 'johnsmith42', avatar: 'https://example.com/avatar2.jpg' },
      content: 'Just finished reading an amazing book. Highly recommend! 📚',
      timestamp: '4 hours ago',
      likes: 8,
      comments: 1,
    },
    {
      id: 3,
      user: { name: 'Emily Johnson', username: 'emilyjohnson33', avatar: 'https://example.com/avatar3.jpg' },
      image: 'https://source.unsplash.com/random/800x600?food',
      content: 'Trying out a new recipe tonight. Wish me luck! 🍳',
      timestamp: '6 hours ago',
      likes: 22,
      comments: 5,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Elevate.U" className="text-center">
        <Link to="/notifications" className="text-gray-600 hover:text-gray-900">
          <Bell className="h-6 w-6" />
        </Link>
      </Header>
      <div className="p-4 pb-20 max-w-2xl mx-auto space-y-4">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;