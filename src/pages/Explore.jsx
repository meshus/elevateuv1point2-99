import React from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

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

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Explore" />
      <div className="p-4 pb-20">
        <div className="flex mb-4">
          <Input className="flex-grow mr-2" placeholder="Search..." />
          <Button>
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <ExploreGrid />
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Explore;