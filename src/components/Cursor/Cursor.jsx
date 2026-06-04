import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const brushRef = useRef(null)
  const ringRef  = useRef(null)
  const pos      = useRef({ x: 0, y: 0 })
  const ring     = useRef({ x: 0, y: 0 })
  const raf      = useRef(null)

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (brushRef.current) {
        /* offset so the bristle TIP is the click point */
        brushRef.current.style.transform =
          `translate(${pos.current.x - 4}px, ${pos.current.y - 28}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    const grow   = () => ringRef.current?.classList.add('cursor--hover')
    const shrink = () => ringRef.current?.classList.remove('cursor--hover')
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Makeup brush cursor */}
      <div ref={brushRef} className="cursor-brush" aria-hidden="true">
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bristles */}
          <ellipse cx="14" cy="6" rx="7" ry="6" fill="url(#bristle)"/>
          <ellipse cx="14" cy="7" rx="5" ry="4" fill="url(#bristle2)" opacity="0.6"/>
          {/* Ferrule (metal band) */}
          <rect x="10" y="11" width="8" height="5" rx="1" fill="url(#ferrule)"/>
          {/* Handle */}
          <rect x="11.5" y="16" width="5" height="16" rx="2.5" fill="url(#handle)"/>
          {/* Handle end knob */}
          <ellipse cx="14" cy="33" rx="3" ry="2" fill="#4C1D95"/>

          <defs>
            <linearGradient id="bristle" x1="14" y1="0" x2="14" y2="12" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F0F4F8"/>
              <stop offset="100%" stopColor="#CBD5E1"/>
            </linearGradient>
            <linearGradient id="bristle2" x1="14" y1="3" x2="14" y2="11" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#E2C97A" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="ferrule" x1="10" y1="11" x2="18" y2="16" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C8D0DC"/>
              <stop offset="100%" stopColor="#8A9AAB"/>
            </linearGradient>
            <linearGradient id="handle" x1="11" y1="16" x2="17" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7B2FBE"/>
              <stop offset="100%" stopColor="#4C1D95"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Trailing ring */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
