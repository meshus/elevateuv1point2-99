import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    className={`backdrop-blur-md bg-white/30 rounded-xl shadow-lg ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.div>
);

export default GlassCard;