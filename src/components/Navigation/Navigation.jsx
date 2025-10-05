// components/Navigation/Navigation.jsx
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <span className="gradient-text">Portfolio</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation