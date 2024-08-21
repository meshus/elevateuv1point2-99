import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNavigation from '../components/BottomNavigation';
import { Bell, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const fetchPosts = async () => {
    setLoading(true);
    // Simulating API call
    const newPosts = Array.from({ length: 5 }, (_, i) => ({
      id: posts.length + i + 1,
      user: { name: `User ${posts.length + i + 1}`, username: `user${posts.length + i + 1}`, avatar: `https://i.pravatar.cc/150?img=${posts.length + i + 1}` },
      content: `This is post number ${posts.length + i + 1}. #elevateu`,
      image: `https://picsum.photos/seed/${posts.length + i + 1}/800/600`,
      timestamp: '2 hours ago',
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 20),
    }));
    setPosts(prevPosts => [...prevPosts, ...newPosts]);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (inView) {
      fetchPosts();
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Elevate.U" className="text-center sticky top-0 z-10 bg-white shadow-md">
        <Link to="/notifications" className="text-gray-600 hover:text-gray-900">
          <Bell className="h-6 w-6" />
        </Link>
      </Header>
      <div className="p-4 pb-20 max-w-2xl mx-auto space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Post {...post} />
          </motion.div>
        ))}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          </div>
        )}
        <div ref={ref}></div>
      </div>
      <Link to="/new-post" className="fixed bottom-20 right-4 z-10">
        <Button className="rounded-full w-14 h-14 bg-red-500 hover:bg-red-600 text-white shadow-lg">
          <Plus className="h-6 w-6" />
        </Button>
      </Link>
      <BottomNavigation />
    </div>
  );
};

export default Home;