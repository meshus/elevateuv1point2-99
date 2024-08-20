import React from 'react';
import { ArrowLeft, Camera, Bell } from 'lucide-react';
import { Avatar } from './ui/avatar';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ title, showBackButton = false, showCamera = false }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 bg-white sticky top-0 z-10">
      <div className="flex items-center">
        {showBackButton && (
          <button className="mr-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
        )}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center">
        {showCamera && (
          <button className="mr-4">
            <Camera className="h-6 w-6 text-gray-600" />
          </button>
        )}
        <Link to="/notifications" className="mr-4">
          <Bell className="h-6 w-6 text-gray-600" />
        </Link>
        <Link to="/profile">
          <Avatar className="h-8 w-8" />
        </Link>
      </div>
    </header>
  );
};

export default Header;