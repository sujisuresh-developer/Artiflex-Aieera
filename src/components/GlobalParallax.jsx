import { useEffect } from "react"
import gsap from "gsap"

const GlobalParallax = () => {
  useEffect(() => {
    const layers = document.querySelectorAll("[data-depth]")

    const state = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener("mousemove", onMove)

    gsap.ticker.add(() => {
      // inertia (THIS is the mont-fort feel)
      state.x += (target.x - state.x) * 0.08
      state.y += (target.y - state.y) * 0.08

      layers.forEach((el) => {
        const depth = Number(el.dataset.depth)

        gsap.set(el, {
          x: state.x * depth * 20,
          y: state.y * depth * 20,
          rotateX: -state.y * depth * 6,
          rotateY: state.x * depth * 6,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        })
      })
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return null
}

export default GlobalParallax
