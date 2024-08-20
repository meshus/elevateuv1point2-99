import React from 'react';
import { Avatar } from '../components/ui/avatar';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

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

const Notifications = () => {
  const notifications = [
    { avatar: '/avatar1.jpg', name: 'John Doe', action: 'liked your post', time: '2m ago' },
    { avatar: '/avatar2.jpg', name: 'Jane Smith', action: 'commented on your photo', time: '15m ago' },
    { avatar: '/avatar3.jpg', name: 'Mike Johnson', action: 'started following you', time: '1h ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Notifications" showBackButton={true} />
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