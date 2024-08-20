import React from 'react';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Settings, Edit3 } from 'lucide-react';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';

const ProfileHeader = ({ name, username, bio, following, followers, isOwnProfile }) => (
  <div className="bg-white p-4 rounded-lg shadow mb-4">
    <div className="flex items-center mb-4">
      <Avatar className="h-20 w-20 mr-4" />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
    </div>
    <p className="mb-4">{bio}</p>
    <div className="flex justify-between mb-4">
      <span><strong>{following}</strong> Following</span>
      <span><strong>{followers}</strong> Followers</span>
    </div>
    {isOwnProfile ? (
      <div className="flex space-x-2">
        <Button className="flex-grow" variant="outline" as={Link} to="/edit-profile">
          <Edit3 className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
        <Button variant="outline" className="aspect-square p-2" as={Link} to="/settings">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    ) : (
      <div className="flex space-x-2">
        <Button className="flex-grow">Follow</Button>
        <Button variant="outline">Message</Button>
      </div>
    )}
  </div>
);

const Profile = () => {
  const profileData = {
    name: 'Elevate U',
    username: 'elevate.u',
    bio: 'Designing Products that Users Love',
    following: 143,
    followers: 149,
  };

  const images = [
    'https://source.unsplash.com/random/300x300?sig=1',
    'https://source.unsplash.com/random/300x300?sig=2',
    'https://source.unsplash.com/random/300x300?sig=3',
    'https://source.unsplash.com/random/300x300?sig=4',
    'https://source.unsplash.com/random/300x300?sig=5',
    'https://source.unsplash.com/random/300x300?sig=6',
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={profileData.name} showBackButton={true} />
      <div className="p-4 pb-20">
        <ProfileHeader {...profileData} isOwnProfile={true} />
        <ImageGrid images={images} />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;