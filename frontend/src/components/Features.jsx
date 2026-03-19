import React from 'react'

export default function Features() {
  return (
    <section id="features">
      <div className="section-divider" style={{ marginBottom: '80px' }}></div>
      <div className="features-header reveal">
        <div className="section-label">✦ Features</div>
        <h2 className="section-title">Everything you need to<br /><em>assess smarter</em></h2>
        <p className="section-sub">Built for BSCpE students at Batangas State University — powered by machine learning.</p>
      </div>
      <div className="features-grid reveal">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <div className="feature-title">Performance Forecasting</div>
          <p className="feature-desc">XGBoost and Scikit-learn models analyze historical grades to predict future academic performance with high accuracy.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <div className="feature-title">ABET Outcome Mapping</div>
          <p className="feature-desc">Automatically maps course ILOs to ABET Student Outcomes (a–l), giving a clear picture of competency development.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <div className="feature-title">Skill Progress Tracking</div>
          <p className="feature-desc">Monitor your skill acquisition trajectory across all semesters with Bloom's Taxonomy-aligned assessments.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <div className="feature-title">Resume Generator</div>
          <p className="feature-desc">Auto-generate a skills-based resume tailored to your actual competency profile — not just your GPA.</p>
        </div>
      </div>
    </section>
  )
}
