import React, { useState } from 'react';
import { Avatar } from './ui/avatar';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Post = ({ user, content, image, timestamp, likes: initialLikes, comments: initialComments }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [commentCount, setCommentCount] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/profile/${user.username}`} className="flex items-center">
            <Avatar className="h-10 w-10 mr-2" src={user.avatar} alt={user.name} />
            <div>
              <h3 className="font-bold text-sm">{user.name}</h3>
              <p className="text-xs text-gray-500">@{user.username}</p>
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Report Post</DropdownMenuItem>
              <DropdownMenuItem>Mute User</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {content && <p className="mb-4 text-sm">{content}</p>}
      </div>
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full object-cover max-h-96"
        />
      )}
      <div className="p-4 flex justify-between items-center text-gray-500 text-sm">
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
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Avatar className="h-8 w-8" />
                    <div>
                      <Link to={`/profile/user${index}`} className="font-semibold hover:underline">User {index}</Link>
                      <p className="text-sm">This is a sample comment.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button onClick={handleAddComment} className="rounded-l-none bg-red-500 hover:bg-red-600">Post</Button>
            </div>
          </DialogContent>
        </Dialog>
        <motion.button whileTap={{ scale: 0.9 }} onClick={handleShare} className="flex items-center">
          <Share2 className="h-5 w-5 mr-1" />
        </motion.button>
      </div>
      <p className="text-xs text-gray-500 px-4 pb-4">{timestamp}</p>
    </div>
  );
};

export default Post;