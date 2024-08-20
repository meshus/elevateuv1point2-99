import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNavigation from '../components/BottomNavigation';

const Home = () => {
  const posts = [
    {
      user: { name: 'Jane Doe', username: 'janedoe21', avatar: 'https://example.com/avatar1.jpg' },
      content: 'Enjoying a beautiful day at the park! 🌳☀️',
      image: 'https://example.com/park.jpg',
      timestamp: '2 hours ago',
    },
    {
      user: { name: 'John Smith', username: 'johnsmith42', avatar: 'https://example.com/avatar2.jpg' },
      content: 'Just finished reading an amazing book. Highly recommend! 📚',
      timestamp: '4 hours ago',
    },
    {
      user: { name: 'Emily Johnson', username: 'emilyjohnson33', avatar: 'https://example.com/avatar3.jpg' },
      image: 'https://example.com/food.jpg',
      content: 'Trying out a new recipe tonight. Wish me luck! 🍳',
      timestamp: '6 hours ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="ElevateU" />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;