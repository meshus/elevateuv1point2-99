import React, { useState } from 'react';
import { Avatar } from './ui/avatar';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Post = ({ user, content, image, timestamp }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Link to={`/profile/${user.username}`} className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-2" src={user.avatar} alt={user.name} />
        <div>
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </Link>
      {content && <p className="mb-4">{content}</p>}
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full rounded-lg mb-4 object-cover max-h-96"
        />
      )}
      <div className="flex justify-between text-gray-500">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={`flex items-center ${liked ? 'text-red-500' : ''}`}
        >
          <Heart className="h-5 w-5 mr-1" fill={liked ? 'currentColor' : 'none'} />
          <span>{likeCount} Likes</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }} className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-1" />
          <span>Comment</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.9 }} className="flex items-center">
          <Share2 className="h-5 w-5 mr-1" />
          <span>Share</span>
        </motion.button>
      </div>
      <p className="text-xs text-gray-500 mt-2">{timestamp}</p>
    </div>
  );
};

export default Post;