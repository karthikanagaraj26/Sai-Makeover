import { useReveal } from '../../hooks/useReveal'
import ServiceCard from './ServiceCard'
import { SERVICES } from './servicesData'
import './Services.css'

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section id="services" className="services">
      <div ref={ref} className="section-header">
        <p className={`section-tag ${visible ? 'section-tag--visible' : ''}`}>
          What We Offer
        </p>
        <h2 className={`section-title ${visible ? 'section-title--visible' : ''}`}
            style={{ '--delay': '0.15s' }}>
          Our Signature <em>Services</em>
        </h2>
        <p className={`section-subtitle ${visible ? 'section-subtitle--visible' : ''}`}
           style={{ '--delay': '0.3s' }}>
          Hover over each card to explore our premium treatments
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
