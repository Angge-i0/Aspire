import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
        <a href="#" className="btn-primary" style={{ fontSize: '16px' }} onClick={() => setMenuOpen(false)}>Login</a>
      </div>

      {/* NAVBAR */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <img 
            src="/logo.png" 
            alt="ASPIRE Logo" 
            style={{ 
              height: '44px', width: 'auto', objectFit: 'contain', 
              filter: 'drop-shadow(0 0 8px rgba(188,19,19,0.4))',
              transform: 'scale(1.8)', transformOrigin: 'left center'
            }} 
          />
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ul>
        <a href="#" className="nav-login">Login</a>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)}>
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>
    </>
  )
}
