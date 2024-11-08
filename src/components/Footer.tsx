import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Copyright Text */}
        <div className="copyright-text">
          Faizan Anjum &copy; Copyright 2024
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/faizan.anjum.7334" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/face.png" 
              alt="Facebook"
              width={30} 
              height={30}
              className="social-icon"
            />
          </a>

          {/* Twitter Icon */}
          <a href="https://www.instagram.com/welcometofaizeecity/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/twitt.png" 
              alt="Twitter"
              width={30} 
              height={30}
              className="social-icon"
            />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/faizan-anjum-a044912b8/" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/linkd.png" 
              alt="LinkedIn"
              width={30} 
              height={30}
              className="social-icon"
            />
          </a>

          {/* Message Icon */}
          <a href="mailto:faizee956gmail.com" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/sent.png" 
              alt="Send Message"
              width={30} 
              height={30}
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
