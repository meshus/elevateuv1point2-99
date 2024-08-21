import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

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
      <Header title="ELEVATEU" showBackButton={false} />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        <ProfileHeader {...profileData} isOwnProfile={true} onEditProfile={handleEditProfile} />
        <ImageGrid images={images} />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;