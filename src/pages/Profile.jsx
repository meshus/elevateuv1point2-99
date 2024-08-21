import React, { useState, useEffect } from 'react';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Settings, Edit3, Grid, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';
import { Link, useParams, useNavigate } from 'react-router-dom';

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
        <div className="flex justify-between mb-4">
          <span><strong>{following}</strong> Following</span>
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
  const { username } = useParams();
  const navigate = useNavigate();
  const isOwnProfile = !username;
  const [profileData, setProfileData] = useState({
    name: 'Elevate U',
    username: 'elevate.u',
    bio: 'Designing Products that Users Love',
    following: 143,
    followers: 149,
    bannerImage: 'https://source.unsplash.com/random/1200x400?landscape',
    avatar: 'https://source.unsplash.com/random/200x200?face',
  });

  const [activeTab, setActiveTab] = useState('posts');

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
  }, [username]);

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={isOwnProfile ? profileData.name : `${profileData.name}'s Profile`} showBackButton={true} />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        <ProfileHeader {...profileData} isOwnProfile={isOwnProfile} onEditProfile={handleEditProfile} />
        <div className="flex mb-4">
          <Button
            variant={activeTab === 'posts' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('posts')}
            className="flex-1"
          >
            <Grid className="h-5 w-5 mr-2" />
            Posts
          </Button>
          <Button
            variant={activeTab === 'about' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('about')}
            className="flex-1"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            About
          </Button>
        </div>
        {activeTab === 'posts' && <ImageGrid images={images} />}
        {activeTab === 'about' && (
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-bold mb-2">About {profileData.name}</h3>
            <p>{profileData.bio}</p>
            {/* Add more about information here */}
          </div>
        )}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;