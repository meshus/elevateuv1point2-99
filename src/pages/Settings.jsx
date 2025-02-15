import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Settings" showBackButton={true} />
      <div className="p-4 max-w-2xl mx-auto">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
          <SettingsItem
            title="Edit Profile"
            description="Change your profile information"
            action={<ChevronRight className="h-5 w-5 text-gray-400" onClick={() => navigate('/edit-profile')} />}
          />
          <SettingsItem
            title="Change Password"
            description="Update your password"
            action={<ChevronRight className="h-5 w-5 text-gray-400" />}
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
          <SettingsItem
            title="Push Notifications"
            action={<Switch />}
          />
          <SettingsItem
            title="Email Notifications"
            action={<Switch />}
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