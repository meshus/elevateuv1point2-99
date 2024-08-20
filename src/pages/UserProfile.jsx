import React, { useState } from 'react';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { MessageCircle, MoreHorizontal } from 'lucide-react';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';
import { useParams, useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  const profileData = {
    name: 'John Doe',
    username: username,
    bio: 'Passionate about technology and design',
    following: 250,
    followers: 1000,
    bannerImage: 'https://source.unsplash.com/random/1200x400?landscape',
    avatar: 'https://source.unsplash.com/random/200x200?face',
  };

  const images = [
    'https://source.unsplash.com/random/300x300?sig=7',
    'https://source.unsplash.com/random/300x300?sig=8',
    'https://source.unsplash.com/random/300x300?sig=9',
    'https://source.unsplash.com/random/300x300?sig=10',
    'https://source.unsplash.com/random/300x300?sig=11',
    'https://source.unsplash.com/random/300x300?sig=12',
  ];

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessage = () => {
    navigate(`/chat/${username}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={`${profileData.name}'s Profile`} showBackButton={true} />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow mb-4 overflow-hidden">
          <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${profileData.bannerImage})` }}></div>
          <div className="p-4 relative">
            <Avatar className="h-24 w-24 absolute -top-12 left-4 border-4 border-white" src={profileData.avatar} />
            <div className="ml-28">
              <h2 className="text-xl font-bold">{profileData.name}</h2>
              <p className="text-gray-600">@{profileData.username}</p>
            </div>
            <p className="mt-2 mb-4">{profileData.bio}</p>
            <div className="flex justify-between mb-4">
              <span><strong>{profileData.following}</strong> Following</span>
              <span><strong>{profileData.followers}</strong> Followers</span>
            </div>
            <div className="flex space-x-2">
              <Button className="flex-grow" onClick={handleFollowToggle}>
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
              <Button variant="outline" onClick={handleMessage}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Message
              </Button>
              <Button variant="outline" className="aspect-square p-2">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <ImageGrid images={images} />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default UserProfile;