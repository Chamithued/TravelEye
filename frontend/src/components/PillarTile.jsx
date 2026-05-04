import React from 'react'
import './PillarTile.css'

export default function PillarTile({ image, badge, title, excerpt, primaryLabel, secondaryLabel }) {
  return (
    <article className="pillar-tile" style={image ? { backgroundImage: `url(${image})` } : {}}>
      <div className="tile-overlay" />
      {badge && <div className="tile-badge">{badge}</div>}

      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        {excerpt && <p className="tile-excerpt">{excerpt}</p>}

        <div className="tile-actions">
          {primaryLabel && <a className="tile-btn primary" href="#">{primaryLabel}</a>}
          {secondaryLabel && <a className="tile-btn outline" href="#">{secondaryLabel}</a>}
        </div>
      </div>
    </article>
  )
}
