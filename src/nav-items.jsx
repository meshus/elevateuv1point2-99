import { Home, Search, PlusSquare, MessageCircle, User, Bell } from 'lucide-react';
import HomePage from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Notifications from './pages/Notifications.jsx';
import Chat from './pages/Chat.jsx';
import Explore from './pages/Explore.jsx';
import NewPost from './pages/NewPost.jsx';
import EditProfile from './pages/EditProfile.jsx';
import UserProfile from './pages/UserProfile.jsx';

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-6 w-6" />,
    page: <HomePage />,
  },
  {
    title: "Explore",
    to: "/explore",
    icon: <Search className="h-6 w-6" />,
    page: <Explore />,
  },
  {
    title: "New Post",
    to: "/new-post",
    icon: <PlusSquare className="h-6 w-6" />,
    page: <NewPost />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageCircle className="h-6 w-6" />,
    page: <Chat />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-6 w-6" />,
    page: <Profile />,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <Bell className="h-6 w-6" />,
    page: <Notifications />,
  },
  {
    title: "Settings",
    to: "/settings",
    page: <Settings />,
  },
  {
    title: "Login",
    to: "/login",
    page: <Login />,
  },
  {
    title: "Signup",
    to: "/signup",
    page: <Signup />,
  },
  {
    title: "Edit Profile",
    to: "/edit-profile",
    page: <EditProfile />,
  },
  {
    title: "User Profile",
    to: "/profile/:username",
    page: <UserProfile />,
  },
];