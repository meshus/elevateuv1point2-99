import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react';
import HomePage from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-6 w-6" />,
    page: <HomePage />,
  },
  {
    title: "Search",
    to: "/search",
    icon: <Search className="h-6 w-6" />,
    page: <div>Search Page</div>,
  },
  {
    title: "New Post",
    to: "/new-post",
    icon: <PlusSquare className="h-6 w-6" />,
    page: <div>New Post Page</div>,
  },
  {
    title: "Messages",
    to: "/messages",
    icon: <MessageCircle className="h-6 w-6" />,
    page: <div>Messages Page</div>,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-6 w-6" />,
    page: <Profile />,
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
];