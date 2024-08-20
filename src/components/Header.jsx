import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { Avatar } from './ui/avatar';

const Header = ({ title, showBackButton = false, showCamera = false }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        {showBackButton && (
          <button className="mr-4">
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
        <Avatar className="h-8 w-8" />
      </div>
    </header>
  );
};

export default Header;