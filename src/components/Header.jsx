import React from 'react';
import { ArrowLeft, Bell } from 'lucide-react';
import { Avatar } from './ui/avatar';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
      {location.pathname === '/' && (
        <Link to="/notifications" className="mr-4">
          <Bell className="h-6 w-6 text-gray-600" />
        </Link>
      )}
    </header>
  );
};

export default Header;