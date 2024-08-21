import React from 'react';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const ProfileHeader = ({ name, username, bio, following, followers, isOwnProfile, bannerImage, avatar, onEditProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}></div>
      <div className="p-4 relative">
        <Avatar className="h-24 w-24 absolute -top-12 left-4 border-4 border-white" src={avatar} />
        <div className="ml-28 mb-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">@{username}</p>
        </div>
        <p className="mt-2 mb-4">{bio}</p>
        <div className="flex mb-4">
          <span className="mr-4"><strong>{following}</strong> Following</span>
          <span><strong>{followers}</strong> Followers</span>
        </div>
        {isOwnProfile ? (
          <Button className="w-full" variant="outline" onClick={onEditProfile}>
            Edit Profile
          </Button>
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