import { motion } from 'framer-motion';
import { Grid, List, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import Post from '../components/Post';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const ProfileHeader = ({ name, username, bio, following, followers, isOwnProfile, bannerImage, avatar, website, onEditProfile, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="p-4 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="h-24 w-24 absolute -top-12 left-4 border-4 border-white shadow-lg" src={avatar} />
        </motion.div>
        <div className="ml-28 mb-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">@{username}</p>
        </div>
        <p className="mt-2 mb-2 text-sm">{bio}</p>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" className="block mb-4 text-blue-500 hover:underline text-sm">
            {website}
          </a>
        )}
        <div className="flex mb-4 space-x-4">
          <span className="text-sm"><strong>{following}</strong> Following</span>
          <span className="text-sm"><strong>{followers}</strong> Followers</span>
        </div>
        {isOwnProfile ? (
          <div className="flex items-center space-x-2">
            <Button className="flex-grow" variant="outline" onClick={onEditProfile}>
              Edit Profile
            </Button>
            {children}
          </div>
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
    gender: 'Not specified',
    birthday: 'Not specified',
    website: 'Not specified',
  });

  const [posts, setPosts] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfileData(prevData => ({
        ...prevData,
        ...parsedProfile,
      }));
    }
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