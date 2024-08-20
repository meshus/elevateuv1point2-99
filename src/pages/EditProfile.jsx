import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Avatar } from '../components/ui/avatar';
import { Camera } from 'lucide-react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'ElevateU',
    username: 'elevate.u',
    bio: "I'm a social media enthusiast and love connecting with people.",
    email: 'john@example.com',
    phone: '+1 (555) 555-5555',
    birthday: '',
    interests: '',
    gender: '',
    location: '',
    website: '',
    avatar: 'https://example.com/avatar.jpg',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Updated profile:', profile);
    navigate('/profile');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfile((prev) => ({ ...prev, avatar: e.target.result }));
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Edit Profile" showBackButton={true} />
      <div className="p-4 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Avatar src={profile.avatar} alt={profile.name} className="w-full h-full" />
            <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer">
              <Camera className="h-5 w-5 text-white" />
            </label>
            <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </div>
          <Input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
          <Input name="username" value={profile.username} onChange={handleChange} placeholder="Username" />
          <Textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" />
          <Input name="email" value={profile.email} onChange={handleChange} placeholder="Email" type="email" />
          <Input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" type="tel" />
          <Input name="birthday" value={profile.birthday} onChange={handleChange} placeholder="Birthday" type="date" />
          <Input name="interests" value={profile.interests} onChange={handleChange} placeholder="Interests" />
          <Input name="gender" value={profile.gender} onChange={handleChange} placeholder="Gender" />
          <Input name="location" value={profile.location} onChange={handleChange} placeholder="Location" />
          <Input name="website" value={profile.website} onChange={handleChange} placeholder="Website" type="url" />
          <Button type="submit" className="w-full">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;