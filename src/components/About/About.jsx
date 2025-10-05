import { useState, useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef(null)
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  const stats = [
    { number: "100+", label: "Problems Solved", target: 100 },
    { number: "25+", label: "Day Streak", target: 25 },
    { number: "4+", label: "Projects Completed", target: 4 },
    { number: "2+", label: "Years Learning", target: 2 }
  ]

  const skills = [
    {
      category: "Technical Skills",
      items: [
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "C++", level: 80 },
        { name: "Python", level: 75 },
        { name: "Data Structures", level: 70 },
        { name: "Git & Version Control", level: 80 },
        { name: "Database Management", level: 70 }
      ]
    },
    {
      category: "Professional Skills",
      items: [
        { name: "Problem Solving", level: 95 },
        { name: "Code Review", level: 75 },
        { name: "System Design", level: 70 },
        { name: "Agile Methodology", level: 80 },
        { name: "Team Collaboration", level: 85 },
        { name: "Technical Documentation", level: 85 },
        { name: "Project Planning", level: 85 },
        { name: "Debugging & Troubleshooting", level: 85 }
      ]
    }
  ]

  // Main Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateNumbers()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  // Scroll animation for individual elements
  useEffect(() => {
    if (!isVisible) return; // Only set up when section is visible

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      }
    )

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => {
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el)
      })
    }
  }, [isVisible]) // This depends on isVisible

  // Animate numbers counting up
  const animateNumbers = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.target / steps
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.target) {
          current = stat.target
          clearInterval(timer)
        }
        setAnimatedStats(prev => {
          const newStats = [...prev]
          newStats[index] = Math.floor(current)
          return newStats
        })
      }, stepDuration)
    })
  }

  return (
    <section id="about" ref={aboutRef} className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="about-header">
          <div className="title-wrapper">
            <h2 className="section-title">
              <span className="title-line">The Person</span>
              <span className="title-line highlight">Behind the Code</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Passionate Developer Building the Future with Code
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="about-content">
          {/* Main Introduction */}
          <div className="intro-section">
            <div className="intro-text">
              <h3 className="intro-title">
                <span className="title-underline">Transforming Vision</span>
                <span className="title-accent"> into Reality</span>
              </h3>
              <p className="intro-paragraph animate-on-scroll">
                I'm a final year Computer Science student with a strong passion for creating 
                efficient, scalable software solutions. My journey in technology has been driven 
                by curiosity and a commitment to solving complex problems through clean, 
                maintainable code.
              </p>
              <p className="intro-paragraph animate-on-scroll">
                With a solid foundation in computer science fundamentals and hands-on experience 
                in full-stack development, I bridge the gap between theoretical knowledge and 
                practical application. I believe in continuous learning and staying updated with 
                emerging technologies.
              </p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card animate-on-scroll">
                  <div className="stat-number">
                    {animatedStats[index]}{stat.number.includes('+') ? '+' : ''}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-underline"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <div className="section-header">
              <h3 className="skills-title">
                
                Core Competencies
              </h3>
              <p className="section-description">
                Mastering the tools and technologies that power modern digital solutions
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skillGroup, groupIndex) => (
                <div 
                  key={groupIndex} 
                  className={`skill-category animate-on-scroll delay-${groupIndex}`}
                >
                  <h4 className="category-title">
                    <span className="category-icon"></span>
                    {skillGroup.category}
                  </h4>
                  <div className="skills-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="skill-item"
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}
                      >
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
              ))}
            </div>
          </div>

          {/* Experience & Approach */}
          <div className="approach-section">
            <div className="section-header">
              <h3 className="skills-title">
                
                Development Approach
              </h3>
              <p className="section-description">
                How I turn complex challenges into elegant solutions
              </p>
            </div>
            <div className="approach-grid">
              <div className="approach-card animate-on-scroll">
                <div className="approach-header">
                  <div className="approach-number">01</div>
                  <h4>Development Philosophy</h4>
                </div>
                <p>
                  I believe in writing clean, efficient code that not only works but is also 
                  maintainable and scalable. Every line of code should have a purpose and 
                  contribute to the overall architecture.
                </p>
              </div>
              <div className="approach-card animate-on-scroll delay-1">
                <div className="approach-header">
                  <div className="approach-number">02</div>
                  <h4>Learning Mindset</h4>
                </div>
                <p>
                  Technology evolves rapidly, and I'm committed to continuous learning. 
                  I regularly practice algorithms, explore new frameworks, and contribute 
                  to projects that challenge my understanding.
                </p>
              </div>
              <div className="approach-card animate-on-scroll delay-2">
                <div className="approach-header">
                  <div className="approach-number">03</div>
                  <h4>Problem-Solving Approach</h4>
                </div>
                <p>
                  I approach problems systematically, breaking them down into manageable 
                  components. My LeetCode practice has honed my ability to think algorithmically 
                  and optimize solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About