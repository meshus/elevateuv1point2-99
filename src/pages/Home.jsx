import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNavigation from '../components/BottomNavigation';

const Home = () => {
  const posts = [
    {
      user: { name: 'Jane Doe', username: 'janedoe21' },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim, porttitor interdum gravida quis.',
      image: 'https://example.com/image1.jpg',
      timestamp: '12:58PM',
    },
    {
      user: { name: 'Jack Dorsey', username: 'Jacktwt21' },
      image: 'https://example.com/image2.jpg',
      timestamp: '4:20PM',
    },
  ];

  return (
    <div className="pb-16">
      <Header title="ElevateU" showCamera={true} />
      <div className="p-4">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Home;