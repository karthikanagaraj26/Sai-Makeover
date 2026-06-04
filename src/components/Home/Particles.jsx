import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const particles = Array.from({ length: 80 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.5 + 0.3,
      dx:    (Math.random() - 0.5) * 0.3,
      dy:    -Math.random() * 0.5 - 0.2,
      alpha: Math.random(),
      da:    (Math.random() - 0.5) * 0.005,
      color: Math.random() > 0.5 ? '#C8D0DC' : '#9B59C5',
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        p.alpha += p.da
        if (p.alpha <= 0 || p.alpha >= 1) p.da *= -1
        if (p.y < 0) { p.y = H; p.x = Math.random() * W }

        ctx.save()
        ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle   = p.color
        ctx.shadowBlur  = 8
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.restore()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}
