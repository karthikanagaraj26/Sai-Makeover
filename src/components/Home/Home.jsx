import { useState, useEffect, useRef } from 'react'
import Particles from './Particles'
import './Home.css'

const WORDS = ['Natural Glow', 'Bridal Dreams', 'Hair Perfection', 'Radiant Skin', 'True Beauty']

export default function Home() {
  const [typed, setTyped] = useState('')
  const wordIdx  = useRef(0)
  const charIdx  = useRef(0)
  const deleting = useRef(false)
  const timer    = useRef(null)
  const bgRef    = useRef(null)

  /* Typewriter */
  useEffect(() => {
    const tick = () => {
      const word  = WORDS[wordIdx.current]
      const speed = deleting.current ? 55 : 105
      setTyped(deleting.current ? word.slice(0, charIdx.current - 1) : word.slice(0, charIdx.current + 1))
      deleting.current ? charIdx.current-- : charIdx.current++
      if (!deleting.current && charIdx.current === word.length) {
        deleting.current = true; timer.current = setTimeout(tick, 1800); return
      }
      if (deleting.current && charIdx.current === 0) {
        deleting.current = false; wordIdx.current = (wordIdx.current + 1) % WORDS.length
      }
      timer.current = setTimeout(tick, speed)
    }
    timer.current = setTimeout(tick, 700)
    return () => clearTimeout(timer.current)
  }, [])

  /* Hero parallax — desktop only */
  useEffect(() => {
    if (window.matchMedia('(max-width:1023px)').matches) return
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current && window.scrollY < window.innerHeight * 1.5) {
            bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      <div className="hero-bottom-fade" />
      <Particles />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Since 2014 · Premium Beauty Parlour
          <span className="hero-eyebrow-line r" />
        </div>

        <h1 className="hero-title">Sai Makeover</h1>

        <div className="hero-typed-line">
          {typed}<span className="hero-cursor">|</span>
        </div>

        <p className="hero-subtitle">
          Step into a world where every woman is treated like a queen.<br />
          We blend ancient Indian beauty traditions with modern luxury —
          crafting looks that feel authentically, beautifully <em>you</em>.
        </p>

        <div className="hero-actions">
          <button className="btn btn--white" onClick={() => scrollTo('services')}>Explore Services</button>
          <button
            className="btn btn--outline"
            style={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}
            onClick={() => scrollTo('contact')}
          >
            Book Appointment
          </button>
        </div>

        <div className="hero-stats">
          {[['5000+','Happy Clients'],['10+','Years Experience'],['500+','Bridal Makeovers'],['30+','Services']].map(([n, l]) => (
            <div key={l} className="hero-stat">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}
