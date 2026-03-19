import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img 
          src="/logo.png" 
          alt="ASPIRE Logo" 
          style={{ 
            height: '36px', width: 'auto', objectFit: 'contain', 
            filter: 'drop-shadow(0 0 6px rgba(188,19,19,0.3))',
            transform: 'scale(2.2)', transformOrigin: 'left center',
            marginRight: '40px'
          }} 
        />
      </div>
      <div className="footer-copy">© 2026 ASPIRE. Bachelor of Science in Computer Engineering. Batangas State University.</div>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Support</a>
      </div>
    </footer>
  )
}
