// src/components/Hero/Hero.jsx
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Creative</span>
          <span className="title-line">Developer</span>
          <span className="title-line">& Designer</span>
        </h1>
        <p className="hero-description">
          Crafting digital experiences with attention to detail and passion for innovation.
        </p>
        <div className="hero-cta">
          <button 
            className="cta-button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </button>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
    </section>
  )
}

export default Hero