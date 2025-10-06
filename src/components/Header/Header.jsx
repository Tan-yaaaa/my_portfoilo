import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentDate, setCurrentDate] = useState('')

  // Set the build/update date when component mounts
  useEffect(() => {
    // This will set the date to when the site was last built/deployed
    const lastUpdated = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setCurrentDate(lastUpdated)
  }, [])

  const shareSite = async () => {
    const shareData = {
      title: 'Tanya Singh - Portfolio',
      text: 'Check out Tanya Singh\'s amazing portfolio',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      }
    } catch (err) {
      console.log('Error sharing:', err)
    }
  }

  const saveSite = () => {
    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(document.title, window.location.href, "")
    } else if (window.external && ('AddFavorite' in window.external)) {
      window.external.AddFavorite(window.location.href, document.title)
    } else {
      alert(`To save this site, press ${navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Cmd+D' : 'Ctrl+D'}`)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollingDown = scrollPosition > lastScrollY
      
      setIsScrolled(scrollPosition > 100 && scrollingDown)
      setLastScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const renderAnimatedName = () => {
    const name = "TANYA SINGH"
    return name.split('').map((letter, index) => (
      <span 
        key={index}
        className={`${styles.letter} ${isScrolled ? styles.scrolledOut : styles.scrolledIn}`}
        style={{ '--i': index }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))
  }

  const renderAnimatedTagline = () => {
    const tagline = "Crafting Digital Reality"
    return tagline.split('').map((letter, index) => (
      <span 
        key={index}
        className={`${styles.taglineLetter} ${isScrolled ? styles.scrolledOut : styles.scrolledIn}`}
        style={{ '--i': index + 12 }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ))
  }

  return (
    <header className={styles.header}>
      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button onClick={shareSite} className={styles.actionBtn} title="Share">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="currentColor"/>
          </svg>
        </button>
        <button onClick={saveSite} className={styles.actionBtn} title="Save">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.updateDate}>Last Updated: {currentDate}</div>
          <h1 className={styles.name}>
            {renderAnimatedName()}
          </h1>
          <div className={styles.tagline}>
            {renderAnimatedTagline()}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header