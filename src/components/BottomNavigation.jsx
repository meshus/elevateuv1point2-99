import React from 'react';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/explore', label: 'Explore' },
    { icon: PlusSquare, path: '/new-post', label: 'New Post' },
    { icon: MessageCircle, path: '/chat', label: 'Chat' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-lg z-50"
    >
      <div className="flex justify-around items-center py-2 px-4 max-w-2xl mx-auto">
        {navItems.map(({ icon: Icon, path, label }) => (
          <Link key={path} to={path} className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${isActive(path) ? 'bg-red-100' : ''}`}
            >
              <Icon className={`h-6 w-6 ${isActive(path) ? 'text-red-500' : 'text-gray-600'}`} />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-xs mt-1 ${isActive(path) ? 'text-red-500 font-semibold' : 'text-gray-500'}`}
            >
              {label}
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;