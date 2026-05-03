import React, { useEffect, useRef, useState } from 'react'
import './OurJourney.css'

export default function OurJourney() {
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

  const timelineItems = [
    {
      year: '2006',
      icon: '⌛',
      title: 'Humble Beginnings',
      description: 'What began with a single individual and a deep respect for travel was shaped by a simple belief: tourism should connect visitors with Sri Lanka\'s local people and opportunities for local communities to participate meaningfully. This early conviction laid the foundation for a journey that would later evolve into a people-powered tourism ecosystem.'
    },
    {
      year: '2012',
      icon: '🕒',
      title: 'The Birth of Experiential Ventures',
      description: 'In 2012 we launched our first Experiential Tourism Ventures, marking a transformative chapter in Sri Lanka\'s tourism journey. We co-created authentic experiences that directly benefit local people, communities, experts, and youth entrepreneurs—ventures that enrich lives, protect cultural heritage, and strengthen local livelihoods.'
    },
    {
      year: 'Today',
      icon: '📅',
      title: 'A People-Powered Tourism Ecosystem',
      description: 'Co-Owned by Youth, Led by Local People and Communities, Guided by Purpose. We\'ve built a people-powered tourism ecosystem for Sri Lanka, built on shared value and co-created with youth entrepreneurs, local communities, and industry experts. Guided by our People-Powered Tourism (PPT) framework, our ventures are co-owned, co-created, and co-managed to empower people, strengthen culture, support nature, and generate shared prosperity.'
    }
  ]

  return (
    <section ref={sectionRef} className={`our-journey ${isVisible ? 'our-journey-visible' : ''}`}>
      <div className="journey-container">
        <div className="journey-header">
          <span className="journey-badge">Our Journey</span>
          <h2 className="journey-title">From Purpose-Driven Tour Operator to Tourism Ecosystem Builder for Sri Lanka</h2>
          <p className="journey-subtitle">Building Sri Lanka's first People-Powered Tourism Ecosystem</p>
          <p className="journey-intro">
            What began in 2006 as a purpose-driven tour operation focused on meaningful travel and strengthening Sri Lanka's domestic tourism sector has evolved into Traveleyе Alliance—an ecosystem reimagining tourism as a platform for shared value, community leadership, and regenerative impact.
          </p>
          <p className="journey-intro">
            Today, we bring together communities, youth entrepreneurs, experience creators, partners, and travelers to co-create tourism that is authentic, inclusive, and people-powered.
          </p>
        </div>

        <div className="journey-timeline">
          {timelineItems.map((item, index) => (
            <div key={item.year} className={`timeline-item ${isVisible ? 'timeline-item-visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="timeline-marker">
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-year">{item.year}</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-quote">
          <p>"This is not tourism as usual. It is tourism reimagined – By the People, For the People, With the People."</p>
          <button className="journey-btn">Learn More</button>
        </div>
      </div>
    </section>
  )
}
