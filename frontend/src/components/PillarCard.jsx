import React from 'react'
import './PillarCard.css'

export default function PillarCard({
  backgroundImage,
  badgeIcon,
  badgeText,
  date,
  title,
  subtitle,
  description,
  buttons = []
}) {
  const bgStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}

  return (
    <div className="pillar-card" style={bgStyle}>
      <div className="pillar-overlay" />
      {badgeIcon && (
        <div className="pillar-badge-icon">
          <img src={badgeIcon} alt="badge" />
        </div>
      )}

      {badgeText && (
        <div className="pillar-top-badge">{badgeText}</div>
      )}

      <div className="pillar-card-inner">
        <div className="pillar-card-top">
          <h3 className="pillar-card-title">{title}</h3>
          {subtitle && <div className="pillar-card-subtitle">{subtitle}</div>}
        </div>

        <div className="pillar-card-body">
          <p className="pillar-card-desc">{description}</p>
        </div>

        <div className="pillar-card-actions">
          {buttons.map((b, i) => (
            <a key={i} href={b.href || '#'} className={`btn ${b.variant === 'outline' ? 'btn-outline' : 'btn-primary'}`}>
              {b.label}
              {b.icon && <span className="btn-icon">→</span>}
            </a>
          ))}
        </div>
      </div>
      {date && <div className="pillar-card-date">{date}</div>}
    </div>
  )
}
