"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container" data-aos="zoom-in">
        {/* Image Section */}
        <div className="image-container" data-aos="zoom-in">
          <Image
            src="/contact/contact.png"
            alt="Contact Image"
            width={590}
            height={728}
            className="image-rounded"
          />
        </div>

        {/* Contact Form Section */}
        <div className="form-container" data-aos="zoom-in">
          <h1 className="form-title">Contact Us</h1>
          <p className="form-description">Drop me an email, give me a call, or send me a message by submitting the form.</p>
          
          {/* Form */}
          <form className="contact-form">
            {/* Name */}
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="input-field"
              />
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="input-field"
              />
            </div>
            
            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="textarea-field"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="submit-button"
              >
                Send Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
