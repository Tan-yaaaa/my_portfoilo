import './Footer.css'
import { FaHome, FaUser, FaProjectDiagram, FaEnvelopeOpen } from 'react-icons/fa'

const Footer = () => {
  const footerLinks = [
    { icon: <FaHome />, name: "Home", href: "#home" },
    { icon: <FaUser />, name: "About", href: "#about" },
    { icon: <FaProjectDiagram />, name: "Projects", href: "#projects" },
    { icon: <FaEnvelopeOpen />, name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <div className="footer-info">
            <p>&copy; 2025</p>
            <p> All rights reserved.</p>
            <p>Built with React & Vite</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer