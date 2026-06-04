import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo1.png'
import './Navbar.css'

const NAV_LINKS = ['home', 'about', 'services', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [inHero,   setInHero]   = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 60)
      setInHero(y < window.innerHeight * 0.8)
      const ids = ['home', 'about', 'services', 'contact']
      let cur = 'home'
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop - 140) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  /* When over the hero image → white text; when scrolled onto white bg → dark text */
  const isLight = inHero && !scrolled

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${isLight ? 'nav-hero' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('home')}>
        <img
          src={logoImg}
          alt="Sai Makeover"
          className="nav-logo-img"
        />
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(id => (
          <li key={id}>
            <button
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
        <li>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Book Now</button>
        </li>
      </ul>

      <button
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(m => !m)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
