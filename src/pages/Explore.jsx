import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, TrendingUp, Users, Image as ImageIcon } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Link } from 'react-router-dom';

const ExploreGrid = () => (
  <div className="grid grid-cols-3 gap-1">
    {[...Array(9)].map((_, index) => (
      <div key={index} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
        <img
          src={`https://source.unsplash.com/random/300x300?sig=${index}`}
          alt={`Explore item ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

const TrendingTopics = () => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">Trending</h2>
    <div className="space-y-2">
      {['Artificial Intelligence', 'Sustainable Fashion', 'Remote Work', 'Plant-Based Diet', 'Cryptocurrency'].map((trend, index) => (
        <Link key={index} to={`/search?q=${encodeURIComponent(trend)}`} className="block">
          <Button variant="ghost" className="w-full justify-start p-2 h-auto">
            {trend}
          </Button>
        </Link>
      ))}
    </div>
  </div>
);

const SuggestedUsers = () => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">Suggested Users</h2>
    <div className="space-y-2">
      {[
        { name: 'John Doe', username: '@johndoe', avatar: 'https://example.com/avatar1.jpg' },
        { name: 'Jane Smith', username: '@janesmith', avatar: 'https://example.com/avatar2.jpg' },
        { name: 'Mike Johnson', username: '@mikejohnson', avatar: 'https://example.com/avatar3.jpg' },
      ].map((user) => (
        <div key={user.username} className="flex items-center">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.username}</p>
          </div>
          <Button size="sm" className="ml-auto">
            Follow
          </Button>
        </div>
      ))}
    </div>
  </div>
);

const Explore = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Explore" />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        <div className="flex mb-4">
          <Input className="flex-grow mr-2" placeholder="Search..." />
          <Button>
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex mb-4 space-x-2">
          <Button
            variant={activeTab === 'trending' ? 'default' : 'outline'}
            onClick={() => setActiveTab('trending')}
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            Trending
          </Button>
          <Button
            variant={activeTab === 'people' ? 'default' : 'outline'}
            onClick={() => setActiveTab('people')}
          >
            <Users className="h-5 w-5 mr-2" />
            People
          </Button>
          <Button
            variant={activeTab === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveTab('photos')}
          >
            <ImageIcon className="h-5 w-5 mr-2" />
            Photos
          </Button>
        </div>
        {activeTab === 'trending' && <TrendingTopics />}
        {activeTab === 'people' && <SuggestedUsers />}
        {activeTab === 'photos' && <ExploreGrid />}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Explore;