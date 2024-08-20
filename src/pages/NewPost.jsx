import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Image, MapPin, Tag } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const NewPost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // TODO: Implement post submission logic
    console.log('Submitting post:', { caption, image });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="New Post" showBackButton={true} />
      <div className="p-4 pb-20">
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
        <Textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-between mb-4">
          <Button variant="outline" className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Add Location
          </Button>
          <Button variant="outline" className="flex items-center">
            <Tag className="h-5 w-5 mr-2" />
            Tag People
          </Button>
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Share
        </Button>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default NewPost;