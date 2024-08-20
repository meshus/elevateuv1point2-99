import React from 'react';
import Header from '../components/Header';
import { Switch } from '../components/ui/switch';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SettingsItem = ({ title, description, action }) => (
  <div className="flex justify-between items-center py-4 border-b">
    <div>
      <h3 className="font-semibold">{title}</h3>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
    {action}
  </div>
);

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Settings" showBackButton={true} />
      <div className="p-4 max-w-2xl mx-auto">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <SettingsItem
            title="Edit Profile"
            description="Change your profile information"
            action={<ChevronRight className="h-5 w-5 text-gray-400" />}
          />
          <SettingsItem
            title="Change Password"
            description="Update your password"
            action={<ChevronRight className="h-5 w-5 text-gray-400" />}
          />
          <SettingsItem
            title="Privacy"
            description="Manage your account privacy"
            action={<ChevronRight className="h-5 w-5 text-gray-400" />}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          <SettingsItem
            title="Push Notifications"
            action={<Switch />}
          />
          <SettingsItem
            title="Email Notifications"
            action={<Switch />}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Privacy</h2>
          <SettingsItem
            title="Private Account"
            description="Only approved followers can see your posts"
            action={<Switch />}
          />
          <SettingsItem
            title="Activity Status"
            description="Allow accounts you follow to see when you're active"
            action={<Switch />}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Security</h2>
          <SettingsItem
            title="Two-Factor Authentication"
            description="Add an extra layer of security to your account"
            action={<Switch />}
          />
          <SettingsItem
            title="Login Activity"
            description="Review your account's login activity"
            action={<ChevronRight className="h-5 w-5 text-gray-400" />}
          />
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Account Management</h2>
          <SettingsItem
            title="Deactivate Account"
            description="Temporarily disable your account"
            action={<Button variant="outline" className="text-yellow-600">Deactivate</Button>}
          />
          <SettingsItem
            title="Delete Account"
            description="Permanently delete your account and all your data"
            action={<Button variant="outline" className="text-red-600">Delete</Button>}
          />
        </section>
      </div>
    </div>
  );
};

export default Settings;