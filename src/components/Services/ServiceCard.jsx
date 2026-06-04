import { useState } from 'react'

export default function ServiceCard({ service, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="service-card reveal"
      style={{ '--delay': `${index * 0.08}s` }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`service-card__inner ${flipped ? 'service-card__inner--flipped' : ''}`}>

        {/* Front */}
        <div className="service-card__front">
          <div className="service-card__img-wrap">
            <img src={service.img} alt={service.title} loading="lazy" />
            <div className="service-card__img-overlay" />
          </div>
          <div className="service-card__front-content">
            <span className="service-card__tag">{service.tag}</span>
            <div className="service-card__icon">{service.icon}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <div className="service-card__price">{service.price}</div>
          </div>
        </div>

        {/* Back */}
        <div className="service-card__back">
          <div className="service-card__back-icon">{service.icon}</div>
          <h3 className="service-card__back-title">{service.title}</h3>
          <p className="service-card__desc">{service.desc}</p>
          <button
            className="btn btn--white"
            style={{ fontSize: '12px', padding: '10px 24px' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book This Service
          </button>
        </div>

      </div>
    </div>
  )
}
