import { useEffect, useRef, useState } from 'react'
import './GetInvolvedSection.css'
import card1 from '../assets/journeymatters/journey1.jpg'
import card2 from '../assets/journeymatters/journey2.jpg'
import card3 from '../assets/quicklinks/new_link3.jpg'
import card4 from '../assets/quicklinks/new_link7.jpg'
import card5 from '../assets/quicklinks/new_link8.jpg'
import logoMain from '../assets/logos/09.png'

export default function GetInvolvedSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const propertyCards = [
    { id: 1, price: '$4,500', image: card1 },
    { id: 2, price: '$3,200', image: card2 },
    { id: 3, price: '$5,800', image: card3 },
    { id: 4, price: '$2,900', image: card4 },
    { id: 5, price: '$4,100', image: card5 }
  ]

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`get-involved-section ${isVisible ? 'get-involved-visible' : ''}`}
      aria-labelledby="get-involved-title"
    >
      <div className="get-involved-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0,28 Q 180,8 360,22 T 720,22 T 1080,22 T 1440,22 L 1440,0 L 0,0 Z"
            fill="#ffffff"
          />
          <path
            d="M 0,36 Q 180,16 360,30 T 720,30 T 1080,30 T 1440,30"
            fill="none"
            stroke="rgba(255,255,255,0.72)"
            strokeWidth="2"
          />
          <path
            d="M 0,48 Q 180,28 360,42 T 720,42 T 1080,42 T 1440,42"
            fill="none"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="get-involved-container">
        <span className="get-involved-badge">Get Involved</span>
        <h2 id="get-involved-title" className="get-involved-title">Every Journey Matters</h2>
        <p className="get-involved-subtitle">
          Tourism is more than where you go — it&apos;s about the impact you create and the people you empower.
          Traveleye Alliance&apos;s People-Powered Tourism Ecosystem exists for People, Planet, and Prosperity.
        </p>

        <div className="property-cards-grid" role="list" aria-label="Featured stays">
          {propertyCards.map((card, index) => (
            <div
              key={card.id}
              role="listitem"
              className={`property-card ${isVisible ? 'property-card-visible' : ''}`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10, 30, 60, 0.28) 0%, rgba(10, 30, 60, 0.48) 100%), url(${card.image})`,
                transitionDelay: `${index * 80}ms`
              }}
            >
              <img src={logoMain} className="property-card-logo" alt="Traveleye logo" />
              {card.id === 1 && (
                <>
                  <div className="property-card-topic">Be a Co-Owner</div>
                  <p className="property-card-description">
                    Co-own a Traveleye <br />venture and participate in building regenerative, <br />people-centered tourism.
                  </p>
                </>
              )}
              {card.id === 2 && (
                <>
                  <div className="property-card-topic">
                    <span className="topic-main">Partner With Us</span>
                    <span className="topic-inbound">(Inbound)</span>
                  </div>
                  <p className="property-card-description property-card-description-secondary">
                    Access tailor-made <br/>journeys, luxury travel <br/>programs, and experiential <br/>or MICE opportunities in <br/>Sri Lanka.
                  </p>
                </>
              )}
            {card.id === 3 && (
                <>
                  <div className="property-card-topic">Collaborate With Us</div>
                  <p className="property-card-description">
                    Collaboration with NGOs <br/>and development partners <br/>to support inclusive, <br/>community-led initiatives.
                  </p>
                </>
              )}
            {card.id === 4 && (
                <>
                  <div className="property-card-topic">Travel With Purpose</div>
                  <p className="property-card-description">
                    Experience authentic <br/>journeys that benefit local<br/> people, culture, and <br/>destinations.
                  </p>
                </>
              )}
            {card.id === 5 && (
                <>
                  <div className="property-card-topic">
                    <span className="topic-main">Support Local People</span>
                    <span className="topic-inbound">&amp; Communities</span>
                  </div>
                  <p className="property-card-description property-card-description-secondary">
                    Contribute to initiatives <br/>that empower women, <br/>youth, and local<br/> enterprises through<br/> meaningful tourism <br/>experiences.
                  </p>
                </>
              )}
              <div className="property-card-action">
                <a href="#" className="property-card-btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <p className="get-involved-quote">
          &ldquo;Join the People-Powered Tourism Movement - where every action creates impact.&rdquo;
        </p>
      </div>
    </section>
  )
}