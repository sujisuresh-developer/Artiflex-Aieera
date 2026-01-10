import { useEffect, useRef } from "react"

const BackgroundMotion = () => {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let width, height
    let particles = []

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    })

    const COUNT = Math.floor((width * height) / 5000)

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() * 1.8 + 0.8,
        speedY: Math.random() * 0.25 + 0.1,
        speedX: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      //  THIS MAKES GLOW VISIBLE
      ctx.globalCompositeOperation = "lighter"

      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.speedX
        if (p.y < -30) {
          p.y = height + 80
          p.x = Math.random() * width
        }

        p.phase += 0.03
        const pulse = Math.sin(p.phase) * 1.2

        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        let glow = 0
        if (dist < 150) glow = (150 - dist) / 150

        const radius = Math.max(
          0.5,
          p.baseRadius + pulse + glow * 5
        )

        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(37,99,235,${0.15 + glow * 0.9})`
        ctx.fill()
      })

      ctx.globalCompositeOperation = "source-over"
      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  )
}

export default BackgroundMotion
