import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization tool for sorting algorithms and data structures",
      frontText: "Built with React and D3.js to demonstrate algorithm behavior",
      backText: "Features include step-by-step execution, speed control, and multiple algorithm implementations with educational explanations",
      tech: ["React", "D3.js", "JavaScript", "CSS3"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication and payment processing",
      frontText: "Complete shopping experience with cart, checkout, and order management",
      backText: "Implemented secure payment gateway, user session management, inventory system, and admin dashboard for product management",
      tech: ["MERN Stack", "Stripe", "JWT", "Redux"]
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      frontText: "Drag-and-drop interface with team collaboration features",
      backText: "Real-time synchronization using WebSockets, file uploads, progress tracking, and team role management with notification system",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"]
    },
    {
      title: "ML Price Predictor",
      description: "Machine learning model for predicting real estate prices",
      frontText: "Regression model trained on housing data with web interface",
      backText: "Implemented feature engineering, model training with Scikit-learn, REST API with Flask, and interactive visualization of predictions",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas"]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">Here are some of my recent works that showcase my skills and experience</p>
        <div className="projects-scroll-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="card-inner">
                  <div className="card-front">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <p className="project-front-text">{project.frontText}</p>
                    <div className="flip-hint">Hover to see details</div>
                  </div>
                  <div className="card-back">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-back-text">{project.backText}</p>
                    <div className="project-links">
                      <button className="btn btn-outline">View Code</button>
                      <button className="btn">Live Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects