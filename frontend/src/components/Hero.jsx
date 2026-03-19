export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-pill">
          <span className="badge">New</span>
          <span>Introducing ASPIRE v1.0 — ML-Powered Academic Forecasting</span>
        </div>
        <h1>
          Predict. <em>Analyze.</em><br />
          <span className="outline-text">Achieve.</span>
        </h1>
        <p className="hero-sub">
          ASPIRE maps student academic performance to real outcomes, forecasts future grades with machine learning, and generates personalized skills-based resumes — built for BSCpE students.
        </p>
        <div className="hero-actions">
          <a href="#features" className="btn-primary">
            Explore Features
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#how-it-works" className="btn-ghost">How it works</a>
        </div>
      </div>
      
      {/* DASHBOARD PREVIEW */}
      <div className="dashboard-section" style={{ paddingBottom: '140px', paddingTop: '40px' }}>
        <div className="relative w-full max-w-[1000px] mx-auto" style={{ height: '650px', position: 'relative' }}>
          
          {/* Instructor Dashboard (Back Left) */}
          <div 
            className="absolute top-0 left-0 w-[68%]" 
            style={{ zIndex: 1, position: 'absolute' }}
          >
            <div className="p-[1px] bg-gradient-to-br from-[#bc1313]/60 to-transparent rounded-[18px]">
              <img 
                src="/instructor_dashboard.png" 
                alt="Instructor Dashboard Preview" 
                className="w-full h-auto rounded-[17px] shadow-2xl bg-black"
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Student Dashboard (Front Right) */}
          <div 
            className="absolute right-0 w-[68%]" 
            style={{ zIndex: 2, position: 'absolute', bottom: '0', transform: 'translateY(20%)' }}
          >
            <div className="p-[1px] bg-gradient-to-br from-[#bc1313] via-[#bc1313]/40 to-transparent rounded-[18px] shadow-2xl">
              <img 
                src="/student_dashboard.png" 
                alt="Student Dashboard Preview" 
                className="w-full h-auto rounded-[17px] bg-black"
                style={{ display: 'block' }}
              />
            </div>
          </div>

          <div className="dashboard-glow opacity-80" style={{ bottom: '-100px', width: '90%', position: 'absolute' }}></div>

          {/* Stat Bubbles */}
          <div className="stat-badge" style={{ left: '-4%', top: '15%', zIndex: 3 }}>
            <div>
              <div className="stat-num">91.3%</div>
              <div className="stat-label">Predicted<br />Next Grade</div>
            </div>
          </div>
          <div className="stat-badge" style={{ right: '-4%', bottom: '5%', zIndex: 3 }}>
            <div>
              <div className="stat-num">89.6%</div>
              <div className="stat-label">Skill<br />Achievement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
