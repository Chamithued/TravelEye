import React, { useEffect, useRef, useState } from 'react'
import './FivePillars.css'
import PillarCard from './PillarCard'
import heroImg from '../assets/heroimg_new.jpg'
import peopleImg from '../assets/people_powered.png'
import mountainImg from '../assets/heroimg_new.jpg'
import logo1 from '../assets/logo1.jpeg'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.jpeg'
import new_pillar1 from '../assets/pillars/new_pillar1.jpg'
import new_pillar2 from '../assets/pillars/new_pillar2.jpg'
import new_pillar3 from '../assets/pillars/new_pillar3.jpg'
import new_pillar4 from '../assets/pillars/new_pillar4.jpg'
import new_pillar5 from '../assets/pillars/new_pillar5.jpg'

export default function FivePillars() {
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

  return (
    <section ref={sectionRef} className={`five-pillars ${isVisible ? 'five-pillars-visible' : ''}`}>
      <div className="five-pillars-container">
        <div className="pillars-header">
          <span className="pillars-badge">Our Five Pillars</span>
          <h2 className="pillars-title">🌿 The Five Pillars That Power Our Ecosystem</h2>
          <p className="pillars-subtitle">The People-Powered Tourism in action</p>
        </div>

        <div className="pillars-content">
          <p className="pillars-text">
            Traveleye Alliance connects people, places, and purpose through five integrated pillars that power Sri Lanka's first People-Powered Tourism Ecosystem.
          </p>
          <p className="pillars-text">
            Built on a people-powered philosophy, Traveleye Alliance enables tourism to be co-owned, co-created, and co-managed by local people, communities, experts, and youth entrepreneurs — creating lasting value for people, culture, and destinations.
          </p>
          <p className="pillars-text">
            Guided by five interconnected pillars, our ecosystem brings together local wisdom, entrepreneurship, and innovation to develop inclusive, responsible, and regenerative tourism enterprises across Sri Lanka.
          </p>
        </div>

        <div className="pillars-tiles">
          <PillarCard
            backgroundImage={new_pillar1}
            badgeIcon={logo1}
            badgeText={"Stays"}
            date={null}
            title={"People-Powered Stays"}
            subtitle={"Rooted in People, Place, and Lifestyle"}
            description={"Authentic Sri Lanka stays co-owned and hosted by local families and communities, offering meaningful connections to culture, place, and everyday life."}
            buttons={[{ label: 'Explore the PPS Model', href: '#', variant: 'primary', icon: true }, { label: 'Co-Own a People-Powered Stay', href: '#', variant: 'outline', icon: true }]}
          />

          <PillarCard
            backgroundImage={new_pillar2}
            badgeIcon={logo2}
            badgeText={"Experiences"}
            date={null}
            title={"People-Powered Experiential Tourism"}
            subtitle={"People-Powered, Immersive, and Regenerative"}
            description={"Authentic Sri Lanka travel experiences co-created and shaped by local people, communities, experts, and youth entrepreneurs at the heart of our People-Powered Tourism model."}
            buttons={[
              { label: 'Explore the PPET Model', href: '#', variant: 'primary', icon: true },
              { label: 'Co-Own an Experience', href: '#', variant: 'outline', icon: true },
              { label: 'Co-Own a Facilitation Center', href: '#', variant: 'outline', icon: true }
            ]}
          />

          <PillarCard
            backgroundImage={new_pillar3}
            badgeIcon={logo3}
            badgeText={"Operations"}
            date={null}
            title={"People-Powered Tour Operations"}
            subtitle={"Thoughtfully Designed Journeys"}
            description={"Responsible inbound, outbound, and domestic travel journeys connecting stays and experiences through people-powered operations focused on quality, safety, and local value."}
            buttons={[{ label: 'Discover the PPTO Model', href: '#', variant: 'primary', icon: true }, { label: 'Co-Own a Travel Venture', href: '#', variant: 'outline', icon: true }]}
          />

          <PillarCard
            backgroundImage={new_pillar4}
            badgeIcon={logo4}
            badgeText={"Support Services"}
            date={null}
            title={"People-Powered Support Services"}
            subtitle={"Enabling local resilience and sustainability"}
            description={"Integrated support services empowering people-powered stays, experiences, and travel through training, technology, advisory, and trusted systems."}
            buttons={[{ label: 'Learn About PPSS Model', href: '#', variant: 'primary', icon: true }, { label: 'Co-Own a Support Service', href: '#', variant: 'outline', icon: true }]}
          />

          <PillarCard
            backgroundImage={new_pillar5}
            badgeIcon={logo5}
            badgeText={"Facilitation"}
            date={null}
            title={"People-Powered Facilitation Centers"}
            subtitle={"Destination Stewardship & Coordination"}
            description={"Place-based facilitation hubs co-owned by local people, enabling coordinated tourism activity, on-ground support, and balanced destination development rooted in lived realities."}
            buttons={[{ label: 'Learn About PPFC Model', href: '#', variant: 'primary', icon: true }, { label: 'Co-Own a Facilitation Center', href: '#', variant: 'outline', icon: true }]}
          />
        </div>
      </div>
    </section>
  )
}
