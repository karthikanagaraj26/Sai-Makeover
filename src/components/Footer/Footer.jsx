import { SERVICES } from '../Services/servicesData'
import logoImg from '../../assets/Footer.png'
import './Footer.css'

const NAV_LINKS = ['home', 'about', 'services', 'contact']

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <img
            src={logoImg}
            alt="Sai Makeover"
            className="footer__logo-img"
          />
          <p>
            Your trusted beauty destination — where every woman is made to feel
            extraordinary.
          </p>
        </div>

        <div className="footer__col">
          <strong>Quick Links</strong>
          <ul>
            {NAV_LINKS.map(id => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <strong>Our Services</strong>
          <ul>
            {SERVICES.map(s => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2025 Sai Makeover. All rights reserved. Crafted with ✦ for beauty.</p>
      </div>
    </footer>
  )
}
