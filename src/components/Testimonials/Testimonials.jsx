import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name:  'Priya Sharma',
    city:  'Delhi',
    text:  'The bridal makeup was absolutely stunning! Everyone kept complimenting how naturally radiant I looked. Sai Makeover made my wedding day unforgettable.',
    stars: 5,
    img:   'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80',
  },
  {
    name:  'Ananya Reddy',
    city:  'Hyderabad',
    text:  'I have been coming here for my monthly facial for over 2 years. The quality never drops — my skin has genuinely transformed. Love the warm, welcoming atmosphere!',
    stars: 5,
    img:   'https://images.unsplash.com/photo-1610088441520-4352457e7095?w=80&q=80',
  },
  {
    name:  'Meena Patel',
    city:  'Mumbai',
    text:  'The mehendi artist is truly gifted. My bridal mehendi had the most intricate patterns and the colour was so deep. Highly recommend for any festive occasion!',
    stars: 5,
    img:   'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=80&q=80',
  },
]

export default function Testimonials() {
  const [ref, visible] = useReveal()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent(c => (c + 1) % TESTIMONIALS.length),
      4000
    )
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="testimonials" ref={ref}>
      <div className={`section-header ${visible ? 'testimonials-header--visible' : ''}`}>
        <p className="section-tag">Client Stories</p>
        <h2 className="section-title">
          Voices of <em>Our Beloved Clients</em>
        </h2>
      </div>

      <div className="testimonials__slider">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className={`testimonial-card ${i === current ? 'testimonial-card--active' : ''}`}
          >
            <div className="testimonial-card__stars">
              {'★'.repeat(t.stars)}
            </div>
            <p className="testimonial-card__text">"{t.text}"</p>
            <div className="testimonial-card__author">
              <img src={t.img} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials__dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            data-hover
          />
        ))}
      </div>
    </section>
  )
}
