import { useEffect, useRef, useState } from 'react'
import './OurGrowingImpact.css'
import {
  Briefcase,
  Globe,
  Heart,
  Home,
  Leaf,
  MapPin,
  Medal,
  PlaneTakeoff,
  UsersRound
} from 'lucide-react'

const impactItems = [
  { id: 1, Icon: UsersRound, value: '120+', label: 'Youth Entrepreneurs Trained & Supported' },
  { id: 2, Icon: Heart, value: '300+', label: 'Women Empowered' },
  { id: 3, Icon: Leaf, value: '500+', label: 'People-Powered Experiences Across Sri Lanka' },
  { id: 4, Icon: MapPin, value: '20+', label: "Travelers' Support Centers Across Sri Lanka" },
  { id: 5, Icon: Medal, value: '100+', label: 'Regenerative Tourism Activities' },
  { id: 6, Icon: Briefcase, value: '100+', label: 'People-Powered Experiences Sold' },
  { id: 7, Icon: PlaneTakeoff, value: '100+', label: 'Inbound Travelers Served' },
  { id: 8, Icon: Globe, value: '100+', label: 'Outbound Travelers Served' },
  { id: 9, Icon: Home, value: '100+', label: 'Domestic Travelers Served' }
]

const impactTargets = impactItems.map((item) => Number.parseInt(item.value, 10) || 0)

export default function OurGrowingImpact() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [displayValues, setDisplayValues] = useState(impactTargets.map(() => 0))

  useEffect(() => {
    const target = headingRef.current || sectionRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasAnimated) return

    const durationMs = 3000
    let startTime = null
    let frameId = null

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / durationMs, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setDisplayValues(impactTargets.map((target) => Math.round(target * easedProgress)))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="growing-impact-section" aria-labelledby="growing-impact-title">
      <div className="growing-impact-container">
        <span className="growing-impact-badge">🌱 Our Growing Impact</span>
        <h2 id="growing-impact-title" ref={headingRef} className="growing-impact-title">Our Growing Impact</h2>
        <p className="growing-impact-subtitle">
          Real numbers that reflect our commitment to people, planet, and prosperity.
        </p>

        <div className="growing-impact-grid" role="list" aria-label="Impact highlights">
          {impactItems.map((item, index) => (
            <article key={item.id} className="growing-impact-card" role="listitem">
              <item.Icon className="growing-impact-icon" aria-hidden="true" />
              <h3 className="growing-impact-value">
                {displayValues[index]}
                {item.value.replace(/[0-9,]/g, '')}
              </h3>
              <p className="growing-impact-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
