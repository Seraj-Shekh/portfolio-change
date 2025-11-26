import React from 'react';
import { motion } from 'framer-motion';
import Blog from '../components/Blog';

const BlogList = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Blog />
      </motion.div>
    </div>
  );
};

export default BlogList;