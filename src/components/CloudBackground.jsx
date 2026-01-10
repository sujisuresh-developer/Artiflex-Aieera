import { useEffect, useRef } from "react"
import gsap from "gsap"



const CloudBackground = () => {
  const canvasRef = useRef(null)
  const clouds = useRef([])
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const resize = () => {
      const pageHeight = document.documentElement.scrollHeight
      canvas.width = window.innerWidth
      canvas.height = pageHeight
    }

    resize()
    window.addEventListener("resize", resize)

    // create clouds across full page height
    clouds.current = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random(),
      r: 35 + Math.random() * 45,
      drift: Math.random() * 0.2 + 0.4,
    }))

    const drawCloud = (c) => {
      const depth = 1 + c.z * 3
      const px = c.x + mouse.current.x * c.z * 40
      const py = c.y + mouse.current.y * c.z * 40

      const gradient = ctx.createRadialGradient(
        px,
        py,
        c.r * 0.3,
        px,
        py,
        c.r * depth
      )

      gradient.addColorStop(0, "rgba(255,255,255,1)")
      gradient.addColorStop(0.5, "rgba(219,234,254,0.95)")
      gradient.addColorStop(0.75, "rgba(191,219,254,0.6)")
      gradient.addColorStop(0.9, "rgba(255,255,255,0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(px, py, c.r * depth, 0, Math.PI * 2)
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      clouds.current.forEach((c) => {
        c.y -= c.drift
        if (c.y < -150) {
          c.y = canvas.height + 150
          c.x = Math.random() * canvas.width
        }
        drawCloud(c)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const onTouch = (e) => {
      if (!e.touches[0]) return
      mouse.current.x =
        (e.touches[0].clientX / window.innerWidth - 0.5) * 2
      mouse.current.y =
        (e.touches[0].clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("touchmove", onTouch)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("touchmove", onTouch)
    }
  }, [])

  const HEADER_HEIGHT = 0

  return (
    <canvas
      ref={canvasRef}
      style={{ top: HEADER_HEIGHT }}
      className="absolute left-0 w-full z-0 pointer-events-none"
    />
  )
}


export default CloudBackground
