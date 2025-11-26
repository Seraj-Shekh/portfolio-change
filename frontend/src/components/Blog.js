import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="blog-header"
        >
          <h2 className="blog-title">Blog</h2>
          <p className="blog-description">
            Thoughts, tutorials, and insights
          </p>
        </motion.div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <Badge className="blog-category-badge">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="blog-post-title">{post.title}</CardTitle>
                  <CardDescription className="blog-post-excerpt">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="blog-meta">
                    <div className="blog-meta-item">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="blog-meta-item">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.id}`} className="blog-read-more">
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;