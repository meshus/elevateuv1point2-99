import React, { useState, useEffect } from 'react';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Settings, Edit3, Grid } from 'lucide-react';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = ({ name, username, bio, following, followers, isOwnProfile, bannerImage, avatar, onEditProfile }) => {
  const navigate = useNavigate();

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
        {isOwnProfile && (
          <div className="flex space-x-2">
            <Button className="flex-grow" variant="outline" onClick={onEditProfile}>
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" className="aspect-square p-2" onClick={() => navigate('/settings')}>
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: 'Elevate U',
    username: 'elevate.u',
    bio: 'Designing Products that Users Love',
    following: 143,
    followers: 149,
    bannerImage: 'https://source.unsplash.com/random/1200x400?landscape',
    avatar: 'https://source.unsplash.com/random/200x200?face',
  });

  const images = [
    'https://source.unsplash.com/random/300x300?sig=1',
    'https://source.unsplash.com/random/300x300?sig=2',
    'https://source.unsplash.com/random/300x300?sig=3',
    'https://source.unsplash.com/random/300x300?sig=4',
    'https://source.unsplash.com/random/300x300?sig=5',
    'https://source.unsplash.com/random/300x300?sig=6',
  ];

  useEffect(() => {
    // Here you would typically fetch the profile data from your backend
    // For now, we'll just use the static data
  }, []);

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={profileData.name} showBackButton={true} />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        <ProfileHeader {...profileData} isOwnProfile={true} onEditProfile={handleEditProfile} />
        <ImageGrid images={images} />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;