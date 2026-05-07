import './WhyTraveleyeSection.css'

const whyCards = [
  {
    icon: '🌱',
    title: 'People-Powered',
    description: 'Co-owned, co-created, and co-managed by local people, communities, youth entrepreneurs, and experts.'
  },
  {
    icon: '🌍',
    title: 'Regenerative Impact',
    description: 'Experiences that restore ecosystems, preserve heritage, and uplift local livelihoods.'
  },
  {
    icon: '🏡',
    title: 'Authentic Experiences',
    description: 'Go beyond the guidebook into living villages, traditions, and real stories.'
  },
  {
    icon: '🤝',
    title: 'Innovative Partnerships',
    description: 'Collaboration and shared ownership that replace traditional hierarchies.'
  },
  {
    icon: '♻️',
    title: 'Inclusive & Sustainable',
    description: 'Empowering women, youth, and rural communities through equitable tourism ventures.'
  },
  {
    icon: '📍',
    title: 'Island-Wide Reach',
    description: 'Our People-Powered Facilitation Centers connect travelers, operators, and local experiences seamlessly across Sri Lanka.'
  }
]

export default function WhyTraveleyeSection() {
  return (
    <section className="why-traveleye-section" aria-labelledby="why-traveleye-title">
      <div className="why-traveleye-badge">Why Traveleye</div>
      <h2 id="why-traveleye-title" className="why-traveleye-title">
        Because Sri Lanka needs a People-Powered Tourism Ecosystem - not another tour operator
      </h2>
      <p className="why-traveleye-subtitle">
        Transforming travel into a shared journey that creates value for People, Planet, and Prosperity.
      </p>

      <div className="why-traveleye-grid">
        {whyCards.map((card) => (
          <article key={card.title} className="why-traveleye-card">
            <div className="why-traveleye-icon" aria-hidden="true">
              <span>{card.icon}</span>
            </div>
            <div className="why-traveleye-card-body">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="why-traveleye-cta-wrap">
        <a className="why-traveleye-cta" href="#">
          Discover More Why Traveleye?
        </a>
      </div>
    </section>
  )
}