import React from 'react';
import Image from 'next/image';

const OurService = () => {
  return (
    <section className="our-service-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="flip-up">
          <h2 className="section-heading">Our Awesome Service</h2>
          <p className="section-subheading">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-item" data-aos="flip-up">
            <Image
              src="/wordpress.png" // Replace with your actual image path
              alt="WordPress Theme"
              width={50}
              height={50}
            />
            <h3 className="service-title">Build WordPress Theme</h3>
            <p className="service-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-item" data-aos="flip-up">
            <Image
              src="/react.png" // Replace with your actual image path
              alt="Figma to Next.js"
              width={50}
              height={50}
            />
            <h3 className="service-title">Figma to Next.js</h3>
            <p className="service-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-item" data-aos="flip-up">
            <Image
              src="/html.png" // Replace with your actual image path
              alt="Figma to HTML5"
              width={50}
              height={50}
            />
            <h3 className="service-title">Figma to HTML 5</h3>
            <p className="service-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-item" data-aos="flip-up">
            <Image
              src="/laravel.png" // Replace with your actual image path
              alt="Laravel Project"
              width={50}
              height={50}
            />
            <h3 className="service-title">Laravel Project</h3>
            <p className="service-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 5 */}
          <div className="service-item" data-aos="flip-up">
            <Image
              src="/customize.png" // Replace with your actual image path
              alt="Customize Website"
              width={50}
              height={50}
            />
            <h3 className="service-title">Customize Website</h3>
            <p className="service-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>

          {/* Service 6 */}
          <div className="service-item" data-aos="flip-up">
            <Image
              src="/js.png" // Replace with your actual image path
              alt="React JS App"
              width={50}
              height={50}
            />
            <h3 className="service-title">React JS App</h3>
            <p className="service-description">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
