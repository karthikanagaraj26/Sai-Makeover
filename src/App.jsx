import { useEffect } from 'react'
import './App.css'

import Cursor        from './components/Cursor/Cursor'
import Navbar        from './components/Navbar/Navbar'
import Home          from './components/Home/Home'
import About         from './components/About/About'
import Services      from './components/Services/Services'
import Testimonials  from './components/Testimonials/Testimonials'
import Contact       from './components/Contact/Contact'
import Footer        from './components/Footer/Footer'

function ParallaxStrip({ img, quote, attr, showBtn }) {
  return (
    <div className="parallax-strip">
      <div
        className="parallax-strip-bg"
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div className="parallax-strip-overlay">
        <p className="strip-quote">{quote}</p>
        <p className="strip-attr">{attr}</p>
        {showBtn && (
          <button
            className="btn btn--white"
            style={{ marginTop: 8 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Glow Session
          </button>
        )}
      </div>
    </div>
  )
}


export default function App() {
  /* Parallax strips scroll effect */
  useEffect(() => {
    let ticking = false
    const strips = document.querySelectorAll('.parallax-strip-bg')
    const run = () => {
      strips.forEach(s => {
        const r = s.parentElement.getBoundingClientRect()
        s.style.transform = `translateY(${(r.top + r.height * .5 - window.innerHeight * .5) * .22}px)`
      })
      ticking = false
    }
    const onScroll = () => { if (!ticking) { requestAnimationFrame(run); ticking = true } }
    window.addEventListener('scroll', onScroll, { passive: true })
    run()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll reveal — runs after paint so service cards are in the DOM */
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

    const attach = () =>
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el))

    /* small rAF so React has finished painting service cards */
    const raf = requestAnimationFrame(attach)
    return () => { cancelAnimationFrame(raf); obs.disconnect() }
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <ParallaxStrip
          img="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80"
          quote='"Real beauty begins the moment you decide to be yourself."'
          attr="— The Sai Makeover Promise"
        />
        <Services />
        <ParallaxStrip
          img="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600&q=80"
          quote='"Good hair and glowing skin are not luxury — they are self-respect."'
          attr="— Sai Makeover"
          showBtn
        />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
