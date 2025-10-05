import { useState, useEffect } from 'react'
import { FaDownload, FaEye } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const codeLines = [
    "// Software Developer",
    "const expertise = {",
    "  frontend: ['React', 'JavaScript', 'CSS3'],",
    "  backend: ['Node.js', 'Python', 'Express'],",
    "  databases: ['MongoDB', 'PostgreSQL'],",
    "  tools: ['Git', 'Docker', 'AWS']",
    "};",
    "",
    "const achievements = {",
    "  leetcode: '100+ Problems',",
    "  streak: '25+ Days',",
    "  projects: 'Modern Web Apps'",
    "};",
    "",
    "function create() {",
    "  return 'Building innovative solutions';",
    "}"
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const currentText = codeLines[currentLine]
      
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentText[charIndex])
          setCharIndex(prev => prev + 1)
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + '\n')
          setCurrentLine(prev => prev + 1)
          setCharIndex(0)
        }, 500)
        return () => clearTimeout(timeout)
      }
    } else {
      // Restart animation after completion
      const timeout = setTimeout(() => {
        setDisplayedText('')
        setCurrentLine(0)
        setCharIndex(0)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [currentLine, charIndex, codeLines])

  // Function to handle resume download with correct base URL
  const handleDownloadResume = () => {
    // Use the correct path with base URL
    const resumeUrl = '/my-portfolio/Tanya_Resume.pdf'
    
    // Test if file exists first
    fetch(resumeUrl)
      .then(response => {
        if (response.ok) {
          // File exists - download it
          const link = document.createElement('a')
          link.href = resumeUrl
          link.download = 'Tanya_Resume.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          // File doesn't exist
          alert(`Resume file not found at: ${resumeUrl}\n\nPlease make sure Tanya_Singh_Resume.pdf is in the public folder.`)
        }
      })
      .catch(error => {
        console.error('Error:', error)
        alert('Error accessing resume file. Please check the console.')
      })
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Designing <span className="gradient-text">Digital Experiences</span>
            </h1>
            
            <p className="hero-subtitle">
              Creative Developer & Technical Problem Solver
            </p>
            
            <p className="hero-description">
              Transforming complex challenges into elegant, scalable solutions through 
              modern technology and innovative development approaches.
            </p>

            <div className="hero-actions-left">
              <a href="#projects" className="btn btn-secondary">
                <FaEye className="btn-icon" />
                View Projects
              </a>
              
              {/* Use anchor tag with correct base URL */}
              <a 
                href="/my-portfolio/Tanya_Singh_Resume.pdf" 
                download="Tanya_Singh_Resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Prevent default and use our handler for better error handling
                  e.preventDefault()
                  handleDownloadResume()
                }}
              >
                <FaDownload className="btn-icon" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-right-section">
            <div className="code-window-container">
              <div className="code-window">
                <div className="code-header">
                  <div className="window-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                  </div>
                  <div className="file-name">developer.js</div>
                  <div className="code-language">JavaScript</div>
                </div>
                <div className="code-body">
                  <div className="line-numbers">
                    {Array.from({ length: 16 }, (_, i) => (
                      <div key={i} className="line-number">{i + 1}</div>
                    ))}
                  </div>
                  <pre className="code-content">
                    <code>
                      {displayedText}
                      <span className="cursor">|</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero