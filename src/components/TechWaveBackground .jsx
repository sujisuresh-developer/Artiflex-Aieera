import { useEffect, useRef } from "react"

const TechWaveBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let width, height
    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    // DOT CONFIG
    const dots = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Background fade
      ctx.fillStyle = "#050E1F"
      ctx.fillRect(0, 0, width, height)

      // Draw dots
      dots.forEach((dot) => {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0 || dot.x > width) dot.vx *= -1
        if (dot.y < 0 || dot.y > height) dot.vy *= -1

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59,130,246,0.85)" // Artiflex Blue
        ctx.fill()
      })

      // Draw connections (wireframe feel)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(96,165,250,${1 - dist / 120})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  )
}

export default TechWaveBackground
