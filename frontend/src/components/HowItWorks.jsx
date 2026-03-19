import React, { useState } from 'react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="how-it-works">
      <div className="how-layout">
        <div>
          <div className="section-label reveal">✦ How It Works</div>
          <h2 className="section-title reveal">Up and running in <em>3 simple steps</em></h2>
          <div className="steps-list">
            <div className={`step-item reveal ${activeStep === 1 ? 'active' : ''}`} onClick={() => setActiveStep(1)}>
              <div className="step-num">01</div>
              <div className="step-body">
                <div className="step-title">Input Your Academic Records</div>
                <p className="step-desc">Upload your grades per subject and semester. The system accepts standard BSCpE curriculum data from Batangas State University.</p>
              </div>
            </div>
            <div className={`step-item reveal ${activeStep === 2 ? 'active' : ''}`} onClick={() => setActiveStep(2)}>
              <div className="step-num">02</div>
              <div className="step-body">
                <div className="step-title">Machine Learning Analysis</div>
                <p className="step-desc">Our trained XGBoost models map your inputs against historical patterns to generate precise performance forecasts.</p>
              </div>
            </div>
            <div className={`step-item reveal ${activeStep === 3 ? 'active' : ''}`} onClick={() => setActiveStep(3)}>
              <div className="step-num">03</div>
              <div className="step-body">
                <div className="step-title">View Insights & Export Resume</div>
                <p className="step-desc">Explore your dashboard, review ABET outcome alignment, and download your personalized skills-based resume.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="how-visual reveal">
          <div className="visual-inner" id="visualDisplay">
             {activeStep === 1 && (
               <div>
                 <div className="visual-number">01</div>
                 <div className="visual-label">Input Your Academic Records</div>
               </div>
             )}
             {activeStep === 2 && (
               <div>
                 <div className="visual-number">02</div>
                 <div className="visual-label">Machine Learning Analysis</div>
               </div>
             )}
             {activeStep === 3 && (
               <div>
                 <div className="visual-number">03</div>
                 <div className="visual-label">View Insights & Export Resume</div>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  )
}
