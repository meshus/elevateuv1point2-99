import React from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';

const Profile = () => {
  const profileData = {
    name: 'Elevate U',
    username: 'elevate.u',
    bio: 'Designing Products that Users Love',
    following: 143,
    followers: 149,
  };

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg',
  ];

  return (
    <div className="pb-16">
      <Header title="ELEVATU" showBackButton={true} />
      <ProfileHeader {...profileData} />
      <ImageGrid images={images} />
      <BottomNavigation />
    </div>
  );
};

export default Profile;