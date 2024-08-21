import React from 'react';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around py-2">
        <Link to="/" className={`text-gray-600 hover:text-black ${isActive('/') ? 'text-red-500' : ''}`}>
          <Home className="h-6 w-6" />
        </Link>
        <Link to="/explore" className={`text-gray-600 hover:text-black ${isActive('/explore') ? 'text-red-500' : ''}`}>
          <Search className="h-6 w-6" />
        </Link>
        <Link to="/new-post" className={`text-gray-600 hover:text-black ${isActive('/new-post') ? 'text-red-500' : ''}`}>
          <PlusSquare className="h-6 w-6" />
        </Link>
        <Link to="/chat" className={`text-gray-600 hover:text-black ${isActive('/chat') ? 'text-red-500' : ''}`}>
          <MessageCircle className="h-6 w-6" />
        </Link>
        <Link to="/profile" className={`text-gray-600 hover:text-black ${isActive('/profile') ? 'text-red-500' : ''}`}>
          <User className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;