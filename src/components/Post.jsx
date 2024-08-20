import React from 'react';
import { Avatar } from './ui/avatar';

const Post = ({ user, content, image, timestamp }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <Avatar className="h-10 w-10 mr-2" />
        <div>
          <h3 className="font-bold">{user.name}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      {content && <p className="mb-2">{content}</p>}
      {image && <img src={image} alt="Post" className="w-full rounded-lg mb-2" />}
      <div className="flex justify-between text-gray-500">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Post;