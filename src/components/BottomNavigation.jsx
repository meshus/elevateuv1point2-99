import React from 'react';
import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around py-2">
        <Link to="/" className="text-gray-600 hover:text-black">
          <Home className="h-6 w-6" />
        </Link>
        <Link to="/search" className="text-gray-600 hover:text-black">
          <Search className="h-6 w-6" />
        </Link>
        <Link to="/new-post" className="text-gray-600 hover:text-black">
          <PlusSquare className="h-6 w-6" />
        </Link>
        <Link to="/messages" className="text-gray-600 hover:text-black">
          <MessageCircle className="h-6 w-6" />
        </Link>
        <Link to="/profile" className="text-gray-600 hover:text-black">
          <User className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;