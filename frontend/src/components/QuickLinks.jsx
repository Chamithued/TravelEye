import React, { useEffect, useRef, useState } from 'react'
import placeholder from '../assets/hero.png'
import link1 from '../assets/clientimages/Stays.png'
import link2 from '../assets/quicklinks/new_link2.jpg'
import link3 from '../assets/quicklinks/new_link3.jpg'
import link4 from '../assets/quicklinks/link4.jpg'
import link5 from '../assets/quicklinks/new_link5.jpg'
import link6 from '../assets/quicklinks/new_link6.jpg'
import link7 from '../assets/quicklinks/new_link7.jpg'
import link8 from '../assets/quicklinks/new_link8.jpg'


export default function QuickLinks() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const cards = [
    { title: 'Explore People-Powered Stays in Sri Lanka', description: 'Part of the easiest route from Ranu Pani to the summit of Mountaintop.', image: link1, path: '#linkpath' },
    { title: 'Explore People-Powered Travel Experiences', description: 'The stunning scandinavian mountains cascades gracefully, creating a serene oasis surrounded.', image: link2, path: '/stays/acandinavian-mountains' },
    { title: 'Plan Your Sri Lanka Journey (Inbound)', description: 'This city is part of the easiest route from Ranu Pani to the summit of Mount Semeru.', image: link3, path: '/stays/france-city' },
    { title: '⁠Discover Sri Lanka in Ultimate Luxury (Inbound)', description: 'A calm lake surrounded by mountains and nature.', image: link4, path: '/stays/lake-retreat' },
    { title: '⁠Plan Your Corporate Event in Sri Lanka (MICE)', description: 'Part of the easiest route from Ranu Pani to the summit of Mountaintop.', image: link5, path: '/assets/mountain.jpeg' },
    { title: 'Plan Your Wedding or Celebration in Sri Lanka', description: 'The stunning scandinavian mountains cascades gracefully, creating a serene oasis surrounded.', image: link6, path: '/stays/acandinavian-mountains' },
    { title: '⁠Discover Sri Lanka Your Way (Domestic - Sri Lankans)', description: 'The stunning scandinavian mountains cascades gracefully, creating a serene oasis surrounded.', image: link7, path: '/stays/acandinavian-mountains' },
    { title: '⁠Explore the World with Traveleye (Outbound - Sri Lankans)', description: 'The stunning scandinavian mountains cascades gracefully, creating a serene oasis surrounded.', image: link8, path: '/stays/acandinavian-mountains' },
  ]

  return (
    <section ref={sectionRef} className={`quick-links ${isVisible ? 'quick-links-visible' : ''}`}>
      <h2 className="quick-links-heading">Quick Links</h2>
      <div className="quick-links-wrap">
        <button className="ql-arrow ql-left" aria-label="Previous" onClick={() => {
          const c = document.querySelector('.quick-links-row'); if (c) c.scrollBy({ left: -300, behavior: 'smooth' });
        }}>&lt;</button>

        <div className="quick-links-row" role="list">
          {cards.map((card, index) => (
            <a
              key={card.title}
              role="listitem"
              className={`travel-card ${isVisible ? 'travel-card-visible' : ''}`}
              href={card.path}
              onClick={(e) => { e.preventDefault(); window.location.href = card.path }}
              style={{
                backgroundImage: `url(${card.image})`,
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div className="card-top">
              </div>
              <div className="card-overlay" />
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
              </div>
            </a>
          ))}
        </div>

        <button className="ql-arrow ql-right" aria-label="Next" onClick={() => {
          const c = document.querySelector('.quick-links-row'); if (c) c.scrollBy({ left: 300, behavior: 'smooth' });
        }}>{'>'}</button>
      </div>
    </section>
  )
}
