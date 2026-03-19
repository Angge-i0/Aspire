import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'Which ML models does ASPIRE use?',
      a: 'We use XGBoost for robust performance forecasting and Scikit-learn pipelines for clustering student competency levels based on historical data.'
    },
    {
      q: 'Is student grade data kept private?',
      a: 'Yes. All academic records uploaded are strictly encrypted and anonymized. Results are only visible to the respective student and authorized academic advisors.'
    },
    {
      q: 'What is ABET outcome mapping?',
      a: 'ABET Student Outcomes (a-l) represent the engineering competencies you must achieve. ASPIRE maps your subject grades (ILOs) directly to these outcomes to show your proficiency.'
    },
    {
      q: 'Can I generate a resume directly from ASPIRE?',
      a: 'Absolutely. Based on your ABET mapping and predicted performance, ASPIRE auto-generates a skills-based resume highlighting your strongest competencies.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq">
      <div className="section-divider" style={{ marginBottom: '80px' }}></div>
      <div className="faq-layout">
        <div>
          <div className="section-label reveal">✦ FAQ</div>
          <h2 className="section-title reveal" style={{ fontSize: 'clamp(42px, 6vw, 64px)' }}>
            Frequently<br /><em>asked</em><br />questions
          </h2>
          <p className="section-sub reveal" style={{ marginTop: '24px' }}>
            Everything you need to know about ASPIRE and how it works for BSCpE students.
          </p>
        </div>
        <div className="faq-list reveal">
          <div className={`faq-item ${openIndex === -2 ? 'open' : 'open'}`} style={{ borderColor: 'rgba(188,19,19,0.35)' }}>
            <button className="faq-question">What is ASPIRE and how does it work?</button>
            <div className="faq-answer" style={{ maxHeight: '200px', padding: '0 24px 22px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                ASPIRE (Analytics Systems for Predictive Insights and Refined Educational Outcomes) is an ML-powered platform that maps BSCpE student grades to ABET Student Outcomes, predicts future academic performance, and generates skills-based resumes.
              </p>
            </div>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(i)}>
                {faq.q}
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
