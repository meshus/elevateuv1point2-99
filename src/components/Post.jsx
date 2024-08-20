import React, { useState } from 'react';
import { Avatar } from './ui/avatar';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const Post = ({ user, content, image, timestamp, likes: initialLikes, comments: initialComments }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [commentCount, setCommentCount] = useState(initialComments);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentToggle = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setCommentCount(commentCount + 1);
      setNewComment('');
      // Here you would typically send the comment to your backend
      console.log('New comment:', newComment);
    }
  };

  const handleShare = () => {
    // In a real app, you'd generate a proper URL for the post
    const postUrl = `https://elevateu.com/post/${user.username}/${timestamp}`;
    navigator.clipboard.writeText(postUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "The post link has been copied to your clipboard.",
      });
    });
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
          <span>{likeCount}</span>
        </motion.button>
        <Dialog>
          <DialogTrigger asChild>
            <motion.button whileTap={{ scale: 0.9 }} className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>{commentCount}</span>
            </motion.button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Comments</DialogTitle>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto">
              {/* Here you would map through and display existing comments */}
              <div className="space-y-4">
                <p>Comment 1</p>
                <p>Comment 2</p>
                <p>Comment 3</p>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-2 border rounded-md"
              />
              <Button onClick={handleAddComment} className="mt-2">Post Comment</Button>
            </div>
          </DialogContent>
        </Dialog>
        <motion.button whileTap={{ scale: 0.9 }} onClick={handleShare} className="flex items-center">
          <Share2 className="h-5 w-5 mr-1" />
        </motion.button>
      </div>
      <p className="text-xs text-gray-500 mt-2">{timestamp}</p>
    </div>
  );
};

export default Post;