import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNavigation from '../components/BottomNavigation';
import { Bell, Plus, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';
import GlassCard from '../components/GlassCard';
import AnimatedTransition from '../components/AnimatedTransition';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
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
    if (inView && !loading) {
      fetchPosts();
    }
  }, [inView, loading]);

  return (
    <AnimatedTransition>
      <div className="min-h-screen bg-gradient-to-b from-red-100 to-blue-100">
        <Header title="Elevate.U" className="text-center sticky top-0 z-10 bg-white/70 backdrop-blur-md shadow-md">
          <Link to="/notifications" className="text-gray-600 hover:text-gray-900">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Bell className="h-6 w-6" />
            </motion.div>
          </Link>
        </Header>
        <div className="p-4 pb-20 max-w-3xl mx-auto space-y-6">
          <AnimatePresence>
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard>
                  <Post {...post} />
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <div className="flex justify-center items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader className="h-8 w-8 text-red-500" />
              </motion.div>
            </div>
          )}
          <div ref={ref} className="h-10" />
        </div>
        <Link to="/new-post" className="fixed bottom-20 right-4 z-10">
          <AnimatedButton className="rounded-full w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg">
            <Plus className="h-6 w-6" />
          </AnimatedButton>
        </Link>
        <BottomNavigation />
      </div>
    </AnimatedTransition>
  );
};

export default Home;