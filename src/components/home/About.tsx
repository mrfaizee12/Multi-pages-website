import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* Grid layout for the image and text */}
        <div className="about-grid">
          {/* Left: Image Section */}
          <div className="about-image" data-aos="zoom-in">
            <Image
              src="/about.png" // Update this URL if your image is located elsewhere in the public folder
              alt="About us"
              width={676} // Adjust width/height according to your design
              height={450}
              className="about-img"
            />
          </div>

          {/* Right: Text Section */}
          <div className="about-text" data-aos="zoom-in">
            <h2 className="about-heading">About Us</h2>
            <p className="about-paragraph">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour.
            </p>
            <ul className="about-list">
              <li className="about-item">
                <strong>User experience design –</strong> 
                <span className="about-subtext"> UI/UX</span>
                <br />
                <span className="about-subtext">Delight the user and make it work.</span>
              </li>
              <li className="about-item">
                <strong>Web and user interface design –</strong> 
                <span className="about-subtext"> Development Websites, web experiences</span>
              </li>
              <li className="about-item">
                <strong>Interaction design –</strong> 
                <span className="about-subtext"> Animation I like to move it, move it.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
