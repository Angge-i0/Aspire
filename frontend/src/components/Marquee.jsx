const items = [
  'Performance Forecasting',
  'ABET Outcome Mapping',
  'Skill Progression',
  'Resume Generator',
  'XGBoost ML Models',
  'FastAPI Backend',
  'BSCpE Curriculum',
  'Batangas State University',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#8B0000] via-[#C0141B] to-[#8B0000] border-y border-[#D71920]/40">
      <div className="flex gap-0 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
        {doubled.map((text, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-[16px] px-[40px] py-[16px] border-r border-white/10 text-[12px] font-bold text-white tracking-[0.16em] uppercase flex-shrink-0"
          >
            <span className="text-[16px] text-white/50">✦</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
