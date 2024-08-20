import React, { useState } from 'react';
import { Avatar } from '../components/ui/avatar';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Button } from '../components/ui/button';
import { Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Switch } from '../components/ui/switch';

const NotificationItem = ({ avatar, name, action, time }) => (
  <div className="flex items-center p-4 border-b">
    <Avatar className="h-10 w-10 mr-3" src={avatar} alt={name} />
    <div className="flex-grow">
      <p className="text-sm">
        <span className="font-bold">{name}</span> {action}
      </p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  </div>
);

const NotificationSettings = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Notification Settings</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>All Notifications</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span>Priority Notifications Only</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span>Likes</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span>Comments</span>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <span>New Followers</span>
          <Switch />
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { avatar: '/avatar1.jpg', name: 'John Doe', action: 'liked your post', time: '2m ago' },
    { avatar: '/avatar2.jpg', name: 'Jane Smith', action: 'commented on your photo', time: '15m ago' },
    { avatar: '/avatar3.jpg', name: 'Mike Johnson', action: 'started following you', time: '1h ago' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Notifications" showBackButton={true}>
        <NotificationSettings />
      </Header>
      <div className="pb-16">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Notifications;