// src/components/Contact/Contact.jsx
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>I'm always open to discussing new opportunities and projects.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+1234567890</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Your City, Country</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact