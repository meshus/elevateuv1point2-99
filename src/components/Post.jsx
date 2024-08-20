import React, { useState } from 'react';
import { Avatar } from './ui/avatar';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Post = ({ user, content, image, timestamp }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <Link to={`/profile/${user.username}`} className="flex items-center">
          <Avatar className="h-10 w-10 mr-2" src={user.avatar} alt={user.name} />
          <div>
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </Link>
      </div>
      {content && <p className="mb-2">{content}</p>}
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full rounded-lg mb-2 object-cover max-h-96"
        />
      )}
      <div className="flex justify-between text-gray-500">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={`flex items-center ${liked ? 'text-red-500' : ''}`}
        >
          <Heart className="h-5 w-5 mr-1" fill={liked ? 'currentColor' : 'none'} />
          Like
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }} className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-1" />
          Comment
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }} className="flex items-center">
          <Share2 className="h-5 w-5 mr-1" />
          Share
        </motion.button>
      </div>
      <p className="text-xs text-gray-500 mt-2">{timestamp}</p>
    </div>
  );
};

export default Post;