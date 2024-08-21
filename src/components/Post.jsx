import React, { useState } from 'react';
import { Avatar } from './ui/avatar';
import { Heart, MessageCircle, Share2, MoreHorizontal, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Input } from './ui/input';
import AnimatedButton from './AnimatedButton';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
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
        <motion.img
          src={image}
          alt="Post"
          className="w-full object-cover max-h-96"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <div className="p-4 flex justify-between items-center text-gray-500 text-sm">
        <AnimatedButton
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={`flex items-center ${liked ? 'text-red-500' : ''}`}
        >
          <Heart className="h-5 w-5 mr-1" fill={liked ? 'currentColor' : 'none'} />
          <span>{likeCount}</span>
        </AnimatedButton>
        <Dialog>
          <DialogTrigger asChild>
            <AnimatedButton variant="ghost" size="sm" className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>{commentCount}</span>
            </AnimatedButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Comments</DialogTitle>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <Avatar className="h-8 w-8" />
                    <div>
                      <Link to={`/profile/user${index}`} className="font-semibold hover:underline">User {index}</Link>
                      <p className="text-sm">This is a sample comment.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex">
              <Input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-grow mr-2"
              />
              <AnimatedButton onClick={handleAddComment} className="bg-red-500 hover:bg-red-600 text-white">
                Post
              </AnimatedButton>
            </div>
          </DialogContent>
        </Dialog>
        <AnimatedButton variant="ghost" size="sm" onClick={handleShare} className="flex items-center">
          <Share2 className="h-5 w-5 mr-1" />
        </AnimatedButton>
      </div>
      <div className="flex justify-between items-center px-4 pb-4">
        <p className="text-xs text-gray-500">{timestamp}</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-500 hover:text-yellow-500"
        >
          <Smile className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Post;