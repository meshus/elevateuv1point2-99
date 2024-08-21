import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import ImageGrid from '../components/ImageGrid';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigate } from 'react-router-dom';
import { Settings, Grid, List } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import Post from '../components/Post';

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

  const [posts, setPosts] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    // Simulating API call to fetch posts
    const fetchedPosts = Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      user: profileData,
      content: `This is post number ${i + 1}. #elevateu`,
      image: `https://picsum.photos/seed/${i + 1}/800/600`,
      timestamp: '2 hours ago',
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 20),
    }));
    setPosts(fetchedPosts);
  }, []);

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="ELEVATEU" showBackButton={false} />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        <ProfileHeader {...profileData} isOwnProfile={true} onEditProfile={handleEditProfile}>
          <Button variant="ghost" size="icon" onClick={handleSettings} className="ml-2">
            <Settings className="h-5 w-5" />
          </Button>
        </ProfileHeader>
        <Tabs defaultValue="posts" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>
          <div className="flex justify-end mt-2">
            <Button variant="ghost" size="sm" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
              {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            </Button>
          </div>
          <TabsContent value="posts">
            {viewMode === 'grid' ? (
              <ImageGrid images={posts.map(post => post.image)} />
            ) : (
              <div className="space-y-4">
                {posts.map(post => (
                  <Post key={post.id} {...post} />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="media">
            <ImageGrid images={posts.map(post => post.image)} />
          </TabsContent>
        </Tabs>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Profile;