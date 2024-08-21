import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const AnimatedButton = ({ children, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button {...props}>
      {children}
    </Button>
  </motion.div>
);

export default AnimatedButton;