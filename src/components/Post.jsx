import React, { useState } from 'react';
import { Avatar } from './ui/avatar';
import { Heart, MessageCircle, Share2, MoreHorizontal, Smile, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Input } from './ui/input';
import AnimatedButton from './AnimatedButton';
import { Tooltip } from './ui/tooltip';

const Post = ({ user, content, image, timestamp, likes: initialLikes, comments: initialComments }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [commentCount, setCommentCount] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const { toast } = useToast();

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Post removed from bookmarks" : "Post bookmarked",
      description: bookmarked ? "You can add it again anytime." : "You can find this post in your bookmarks.",
    });
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
    
    // Use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'Check out this post on ElevateU',
        text: `${user.name} shared a post on ElevateU`,
        url: postUrl,
      }).then(() => {
        console.log('Successfully shared');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(postUrl).then(() => {
        toast({
          title: "Link copied!",
          description: "The post link has been copied to your clipboard.",
        });
      }).catch((err) => {
        console.error('Failed to copy: ', err);
        toast({
          title: "Couldn't copy link",
          description: "Please try again or share manually.",
          variant: "destructive",
        });
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to={`/profile/${user.username}`} className="flex items-center group">
            <Avatar className="h-10 w-10 mr-2 ring-2 ring-red-500 ring-offset-2 transition-all duration-300 group-hover:ring-4" src={user.avatar} alt={user.name} />
            <div>
              <h3 className="font-bold text-sm group-hover:text-red-500 transition-colors duration-300">{user.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">@{user.username}</p>
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Report Post</DropdownMenuItem>
              <DropdownMenuItem>Mute User</DropdownMenuItem>
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {content && <p className="mb-4 text-sm dark:text-gray-300">{content}</p>}
      </div>
      {image && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden"
        >
          <img
            src={image}
            alt="Post"
            className="w-full object-cover max-h-96 transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <p className="text-white text-sm font-semibold">View full image</p>
          </div>
        </motion.div>
      )}
      <div className="p-4 flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
        <Tooltip content={liked ? "Unlike" : "Like"}>
          <AnimatedButton
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center ${liked ? 'text-red-500' : ''}`}
          >
            <Heart className={`h-5 w-5 mr-1 ${liked ? 'fill-current' : ''}`} />
            <span>{likeCount}</span>
          </AnimatedButton>
        </Tooltip>
        <Dialog>
          <DialogTrigger asChild>
            <Tooltip content="Comment">
              <AnimatedButton variant="ghost" size="sm" className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-1" />
                <span>{commentCount}</span>
              </AnimatedButton>
            </Tooltip>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
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
                      <p className="text-sm dark:text-gray-300">This is a sample comment.</p>
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
        <Tooltip content="Share">
          <AnimatedButton variant="ghost" size="sm" onClick={handleShare} className="flex items-center">
            <Share2 className="h-5 w-5 mr-1" />
          </AnimatedButton>
        </Tooltip>
        <Tooltip content={bookmarked ? "Remove Bookmark" : "Bookmark"}>
          <AnimatedButton variant="ghost" size="sm" onClick={handleBookmark} className="flex items-center">
            <Bookmark className={`h-5 w-5 ${bookmarked ? 'fill-current text-blue-500' : ''}`} />
          </AnimatedButton>
        </Tooltip>
      </div>
      <div className="flex justify-between items-center px-4 pb-4">
        <p className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</p>
        <Tooltip content="React">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 transition-colors duration-300"
          >
            <Smile className="h-5 w-5" />
          </motion.button>
        </Tooltip>
      </div>
    </motion.div>
  );
};

export default Post;