import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { SERVICES } from '../Services/servicesData'
import './Contact.css'

const INFO_BLOCKS = [
  {
    icon: '📍',
    label: 'Visit Us',
    detail: '123, Beauty Lane, Near Main Market\nYour City – 500 001',
  },
  {
    icon: '📞',
    label: 'Call Us',
    detail: '+91 98765 43210\n+91 91234 56789',
  },
  {
    icon: '🕐',
    label: 'Working Hours',
    detail: 'Monday – Saturday: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 6:00 PM',
  },
]

const INITIAL_FORM = { name: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent]   = useState(false)

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL_FORM)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">Book Your <em>Appointment</em></h2>
        <p className="section-subtitle">
          We would love to welcome you. Reach out or fill in the form below.
        </p>
      </div>

      <div
        ref={ref}
        className={`contact__inner ${visible ? 'contact__inner--visible' : ''}`}
      >
        {/* Info */}
        <div className="contact__info">
          {INFO_BLOCKS.map(({ icon, label, detail }) => (
            <div key={label} className="contact__info-block">
              <div className="contact__info-icon">{icon}</div>
              <div>
                <strong>{label}</strong>
                <p>{detail.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}</p>
              </div>
            </div>
          ))}

          <div className="contact__social">
            {['Instagram', 'Facebook', 'WhatsApp'].map(name => (
              <a key={name} href="#" className="contact__social-btn" data-hover>
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          {sent && (
            <div className="contact__success">
              ✦ Thank you! We will contact you shortly.
            </div>
          )}

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <select name="service" value={form.service} onChange={handleChange} required>
              <option value="">Select a Service</option>
              {SERVICES.map(s => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Any special requests or message..."
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn--primary btn--full" data-hover>
            ✦ Confirm Appointment
          </button>
        </form>
      </div>
    </section>
  )
}
