import React from 'react';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { icon: Home, path: '/' },
    { icon: Search, path: '/explore' },
    { icon: PlusSquare, path: '/new-post' },
    { icon: MessageCircle, path: '/chat' },
    { icon: User, path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-2xl mx-auto">
        {navItems.map(({ icon: Icon, path }) => (
          <Link key={path} to={path} className={`text-gray-600 hover:text-red-500 transition-colors duration-200 ${isActive(path) ? 'text-red-500' : ''}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-6 w-6" />
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;