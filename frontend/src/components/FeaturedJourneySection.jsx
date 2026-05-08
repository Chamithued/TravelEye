import './FeaturedJourneySection.css'
import back2 from '../assets/back2.jpg'
import domesticJourneyImage from '../assets/clientimages/Stays.png'
import inboundJourneyImage from '../assets/clientimages/Discover Sri Lanka - Domestic.png'
import luxuryJourneyImage from '../assets/clientimages/Partner with Us for Inbound.png'
import planJourneyImage from '../assets/clientimages/Plan Your Sri Lanka Journey.png'
import strollJourneyImage from '../assets/clientimages/At the Traveleye Facilitation Center.png'

const featuredJourneys = [
  {
    badge: 'Save up to 15%',
    title: 'People-Powered Stays',
    price: 'Rooted in People, Place, and Lifestyle',
    description:
      'Authentic Sri Lanka stays co-owned and hosted by local families and communities, offering meaningful connections to culture, place, and everyday life.',
    image: domesticJourneyImage,
    action: 'Plan Your Journey'
  },
  {
    badge: 'Co-create with us',
    title: 'People-Powered Experiential Tourism',
    price: 'People-Powered, Immersive, and Regenerative',
    description:
      'Authentic Sri Lanka travel experiences co-created and shaped by local people, communities, experts, and youth entrepreneurs at the heart of our People-Powered Tourism model.',
    image: inboundJourneyImage,
    action: 'Enquire Now'
  },
  {
    badge: 'People-Powered Tour Operations',
    title: 'Plan Your Sri Lanka Journey',
    price: 'Thoughtfully Designed Journeys',
    description:
      'Responsible inbound, outbound, and domestic travel journeys connecting stays and experiences through people-powered operations focused on quality, safety, and local value.',
    image: planJourneyImage,
    action: 'Start Planning'
  },
  {
    badge: 'Luxury escapes',
    title: 'People-Powered Support Services',
    price: 'Enabling local resilience and sustainability',
    description:
      'Integrated support services empowering people-powered stays, experiences, and travel through training, technology, advisory, and trusted systems.',
    image: luxuryJourneyImage,
    action: 'Explore Luxury'
  },
  {
    badge: 'Curated moments',
    title: 'People-Powered Facilitation Centers',
    price: 'Destination Stewardship & Coordination',
    description:
      'Place-based facilitation hubs co-owned by local people, enabling coordinated tourism activity, on-ground support, and balanced destination development rooted in lived realities.',
    image: strollJourneyImage,
    action: 'View Details'
  }
]

export default function FeaturedJourneySection() {
  return (
    <section className="featured-journeys" aria-labelledby="featured-journeys-title">
      <div className="featured-journeys__inner">
        <div className="featured-journeys__header">
          <span className="featured-journeys__eyebrow">Our Five Pillars</span>
          <h2 id="featured-journeys-title" className="featured-journeys__title">
            🌿 The Five Pillars That Power Our Ecosystem
          </h2>
          <p className="featured-journeys__subtitle">
            The People-Powered Tourism in action
          </p>
          <p className="featured-journeys__subtitle">
            Traveleye Alliance connects people, places, and purpose through five integrated pillars that power Sri Lanka&apos;s first People-Powered Tourism Ecosystem.
          </p>
          <p className="featured-journeys__subtitle">
            Built on a people-powered philosophy, Traveleye Alliance enables tourism to be co-owned, co-created, and co-managed by local people, communities, experts, and youth entrepreneurs — creating lasting value for people, culture, and destinations.
          </p>
          <p className="featured-journeys__subtitle">
            Guided by five interconnected pillars, our ecosystem brings together local wisdom, entrepreneurship, and innovation to develop inclusive, responsible, and regenerative tourism enterprises across Sri Lanka.
          </p>
        </div>

        <div className="featured-journeys__grid">
          {featuredJourneys.map((journey) => (
            <article key={journey.title} className="featured-journey-card">
              <div
                className="featured-journey-card__image"
                style={{ backgroundImage: `url(${journey.image})` }}
                aria-hidden="true"
              />

              <div className="featured-journey-card__body">
                <h3>{journey.title}</h3>
                <div className="featured-journey-card__price">{journey.price}</div>
                <p>{journey.description}</p>
                {journey.title === 'People-Powered Stays' ? (
                  <div className="featured-journey-card__buttons">
                    <a className="featured-journey-card__button featured-journey-card__button--primary" href="#">
                      Learn About PPSS Model
                    </a>
                    <a className="featured-journey-card__button featured-journey-card__button--secondary" href="#">
                      Co-Own a Support Service
                    </a>
                  </div>
                ) : journey.title === 'People-Powered Experiential Tourism' ? (
                  <div className="featured-journey-card__buttons">
                    <a className="featured-journey-card__button featured-journey-card__button--primary" href="#">
                      Explore the PPET Model
                    </a>
                    <a className="featured-journey-card__button featured-journey-card__button--secondary" href="#">
                      Co-Own an Experience
                    </a>
                    <a className="featured-journey-card__button featured-journey-card__button--tertiary" href="#">
                      Co-Own a Facilitation Center
                    </a>
                  </div>
                ) : journey.title === 'Plan Your Sri Lanka Journey' ? (
                  <div className="featured-journey-card__buttons">
                    <a className="featured-journey-card__button featured-journey-card__button--primary" href="#">
                      Discover the PPTO Model
                    </a>
                    <a className="featured-journey-card__button featured-journey-card__button--secondary" href="#">
                      Co-Own a Travel Venture
                    </a>
                  </div>
                ) : journey.title === 'People-Powered Support Services' ? (
                  <div className="featured-journey-card__buttons">
                    <a className="featured-journey-card__button featured-journey-card__button--primary" href="#">
                      Learn About PPSS Model
                    </a>
                    <a className="featured-journey-card__button featured-journey-card__button--secondary" href="#">
                      Co-Own a Support Service
                    </a>
                  </div>
                ) : journey.title === 'People-Powered Facilitation Centers' ? (
                  <div className="featured-journey-card__buttons">
                    <a className="featured-journey-card__button featured-journey-card__button--primary" href="#">
                      Learn About PPFC Model
                    </a>
                    <a className="featured-journey-card__button featured-journey-card__button--secondary" href="#">
                      Co-Own a Facilitation Center
                    </a>
                  </div>
                ) : (
                  <a className="featured-journey-card__link" href="#">
                    {journey.action}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}