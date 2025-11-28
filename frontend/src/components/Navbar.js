import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui/button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'Services', path: '/', section: 'services' },
    { name: 'Skills', path: '/', section: 'skills' },
    { name: 'Projects', path: '/', section: 'projects' },
    { name: 'Experience', path: '/', section: 'experience' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/', section: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (link) => {
    if (link.section) {
      if (location.pathname === '/') {
        scrollToSection(link.section);
      } else {
        // Navigate to home and pass the section to scroll to via state
        navigate('/', { state: { scrollTo: link.section } });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Portfolio
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              link.section ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="navbar-link"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="navbar-link"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-4">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="navbar-mobile-toggle">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="navbar-mobile-menu"
        >
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              link.section ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="navbar-mobile-link"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="navbar-mobile-link"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;