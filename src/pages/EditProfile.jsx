import { Camera } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Avatar } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: 'ElevateU',
    username: 'elevate.u',
    bio: "I'm a social media enthusiast and love connecting with people.",
    email: 'john@example.com',
    phone: '+1 (555) 555-5555',
    avatar: 'https://example.com/avatar.jpg',
    bannerImage: 'https://source.unsplash.com/random/1200x400?landscape',
    gender: '',
    birthday: '',
    website: '',
  });

  useEffect(() => {
    // Here you would typically fetch the current profile data from your backend
    // For now, we'll just use the static data
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'website') {
      if (value === '' || isValidUrl(value)) {
        setProfile(prev => ({ ...prev, [name]: value }));
      } else {
        // You can show an error message here if needed
        console.error('Invalid URL format');
      }
    } else if (name === 'gender') {
      setProfile(prev => ({ ...prev, gender: value }));
    } else {
      setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return string === '' || string.startsWith('http://') || string.startsWith('https://');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    console.log('Updated profile:', profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
    navigate('/profile');
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile(prevProfile => ({
          ...prevProfile,
          [type]: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Edit Profile" showBackButton={true} />
      <div className="p-4 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative w-full h-48 mb-16">
            <img src={profile.bannerImage} alt="Banner" className="w-full h-full object-cover rounded-lg" />
            <label htmlFor="banner-upload" className="absolute bottom-2 right-2 bg-white rounded-full p-2 cursor-pointer">
              <Camera className="h-5 w-5 text-gray-600" />
            </label>
            <input id="banner-upload" type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'bannerImage')} />
            <div className="absolute -bottom-12 left-4">
              <Avatar className="h-24 w-24 border-4 border-white bg-white object-cover" src={profile.avatar} alt={profile.name} />
              <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer">
                <Camera className="h-5 w-5 text-gray-600" />
              </label>
              <input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, 'avatar')} />
            </div>
          </div>
          <Input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
          <Input name="username" value={profile.username} onChange={handleChange} placeholder="Username" />
          <Textarea name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" />
          <Input name="email" value={profile.email} onChange={handleChange} placeholder="Email" type="email" />
          <Input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" type="tel" />
          <Select name="gender" value={profile.gender} onValueChange={(value) => handleChange({ target: { name: 'gender', value } })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
          <Input name="birthday" type="date" value={profile.birthday} onChange={handleChange} placeholder="Birthday" />
          <Input name="website" value={profile.website} onChange={handleChange} placeholder="Website" />
          <Button type="submit" className="w-full bg-red-500 text-white">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;