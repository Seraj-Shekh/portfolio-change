import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/portfolio';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 px-4 bg-white dark:bg-gray-900">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto py-12"
      >
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <div className="mb-8">
          <Badge className="mb-4 bg-blue-600">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>{post.content}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Introduction
            </h2>
            <p>
              In this comprehensive guide, we'll explore the fundamental concepts and practical applications
              that will help you master this technology. Whether you're a beginner or looking to deepen your
              understanding, this post will provide valuable insights and actionable tips.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Key Concepts
            </h2>
            <p>
              Understanding the core principles is essential for building robust and scalable applications.
              Let's break down the most important concepts that form the foundation of this technology.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fundamental principles and best practices</li>
              <li>Common patterns and their use cases</li>
              <li>Performance optimization techniques</li>
              <li>Error handling and debugging strategies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Practical Examples
            </h2>
            <p>
              Theory is important, but practical application is where real learning happens. Here are some
              real-world examples that demonstrate how to implement these concepts effectively.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Conclusion
            </h2>
            <p>
              By understanding and applying these concepts, you'll be well-equipped to build better applications
              and solve complex problems efficiently. Keep practicing, stay curious, and never stop learning.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link to="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View All Posts
            </Button>
          </Link>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;