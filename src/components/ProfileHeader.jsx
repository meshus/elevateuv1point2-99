import React from 'react';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const ProfileHeader = ({ name, username, bio, following, followers, isOwnProfile, bannerImage, avatar, onEditProfile, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="p-4 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="h-24 w-24 absolute -top-12 left-4 border-4 border-white shadow-lg" src={avatar} />
        </motion.div>
        <div className="ml-28 mb-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">@{username}</p>
        </div>
        <p className="mt-2 mb-4 text-sm">{bio}</p>
        <div className="flex mb-4 space-x-4">
          <span className="text-sm"><strong>{following}</strong> Following</span>
          <span className="text-sm"><strong>{followers}</strong> Followers</span>
        </div>
        {isOwnProfile ? (
          <div className="flex items-center space-x-2">
            <Button className="flex-grow" variant="outline" onClick={onEditProfile}>
              Edit Profile
            </Button>
            {children}
          </div>
        ) : (
          <div className="flex space-x-2">
            <Button className="flex-grow bg-red-500 text-white hover:bg-red-600">
              Follow
            </Button>
            <Button variant="outline" className="flex-grow">
              Message
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;