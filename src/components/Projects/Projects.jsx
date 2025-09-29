// src/components/Projects/Projects.jsx
import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Project One",
      category: "Web Development",
      description: "A modern web application with innovative features",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project Two",
      category: "UI/UX Design",
      description: "User-centered design solution for complex problems",
      image: "/project2.jpg",
      technologies: ["Figma", "Illustrator", "After Effects"],
      link: "#"
    },
    // Add more projects...
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <button className="project-link">View Project</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects