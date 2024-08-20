import React from 'react';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';

const ProfileHeader = ({ name, username, bio, following, followers }) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center mb-4">
        <Avatar className="h-20 w-20 mr-4" />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">@{username}</p>
        </div>
      </div>
      <p className="mb-4">{bio}</p>
      <div className="flex justify-between mb-4">
        <span>{following} Following</span>
        <span>{followers} Followers</span>
      </div>
      <Button className="w-full bg-black text-white">Edit Profile</Button>
    </div>
  );
};

export default ProfileHeader;