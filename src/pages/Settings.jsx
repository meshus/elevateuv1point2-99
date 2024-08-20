import React from 'react';
import Header from '../components/Header';
import { Switch } from '../components/ui/switch';

const Settings = () => {
  return (
    <div>
      <Header title="Settings" showBackButton={true} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Edit Profile</span>
            <span className="text-gray-500">Change your profile information</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Change Password</span>
            <span className="text-gray-500">Update your password</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Privacy Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Make Account Private</span>
            <Switch />
          </div>
          <div className="flex justify-between items-center">
            <span>Allow Friends to Find Me</span>
            <Switch />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Push Notifications</span>
            <Switch />
          </div>
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <Switch />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Account Management</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Deactivate Account</span>
            <span className="text-gray-500">Temporarily disable your account</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-red-500">Delete Account</span>
            <span className="text-gray-500">Permanently delete your account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;