import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-description">{personalInfo.title}</p>
          </div>

          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="footer-link"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-section-title">Connect</h4>
            <div className="footer-social">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="footer-social-link">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Made with <Heart className="footer-heart" /> by {personalInfo.name} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;