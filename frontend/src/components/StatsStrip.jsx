import React from 'react'

export default function StatsStrip() {
  return (
    <div className="stats-strip reveal visible">
      <div className="stat-strip-item">
        <span className="stat-strip-num">680+</span>
        <span className="stat-strip-label">Students Tracked</span>
      </div>
      <div className="stat-strip-item">
        <span className="stat-strip-num">67</span>
        <span className="stat-strip-label">Curriculum Courses</span>
      </div>
      <div className="stat-strip-item">
        <span className="stat-strip-num">12</span>
        <span className="stat-strip-label">ABET Student Outcomes</span>
      </div>
      <div className="stat-strip-item">
        <span className="stat-strip-num">95%</span>
        <span className="stat-strip-label">Prediction Accuracy</span>
      </div>
    </div>
  )
}
