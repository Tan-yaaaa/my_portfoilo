// src/components/About/About.jsx
import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Frontend Development", level: 85 },
    { name: "React", level: 80 },
    { name: "Animation", level: 75 },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate designer and developer with over 5 years of experience 
              creating digital products that users love. I believe in the power of 
              clean design and robust code.
            </p>
            
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About