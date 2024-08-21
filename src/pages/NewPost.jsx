import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Image, MapPin, Tag, X } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const [postType, setPostType] = useState(null);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    // TODO: Implement post submission logic
    console.log('Submitting post:', { postType, caption, image, location, tags });
    // Navigate back to the home page after posting
    navigate('/');
  };

  if (!postType) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header title="New Post" showBackButton={true} />
        <div className="p-4 pb-20 max-w-2xl mx-auto flex flex-col space-y-4">
          <Button onClick={() => setPostType('text')} className="h-16">Text Post</Button>
          <Button onClick={() => setPostType('image')} className="h-16">Image Post</Button>
        </div>
        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="New Post" showBackButton={true} />
      <div className="p-4 pb-20 max-w-2xl mx-auto">
        {postType === 'image' && (
          <div className="mb-4">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center bg-white border-2 border-dashed border-gray-300 rounded-lg h-64 cursor-pointer"
            >
              {image ? (
                <img src={image} alt="Uploaded" className="max-h-full max-w-full object-contain" />
              ) : (
                <div className="text-center">
                  <Image className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Click to upload an image</p>
                </div>
              )}
            </label>
          </div>
        )}
        <Textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="mb-4"
        />
        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 mr-2 text-gray-500" />
          <Input
            placeholder="Add location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Tag className="h-5 w-5 mr-2 text-gray-500" />
            <Input
              placeholder="Add tags"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
            />
            <Button onClick={handleAddTag} className="ml-2">
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-sm flex items-center">
                {tag}
                <button onClick={() => handleRemoveTag(tag)} className="ml-2">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full bg-red-500 text-white" onClick={handleSubmit}>
          Share
        </Button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default NewPost;