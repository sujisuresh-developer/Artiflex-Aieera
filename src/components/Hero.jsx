import { motion } from "framer-motion"
import FloatingLines from "./FloatingLines"

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[650px] pt-[80px] overflow-hidden bg-blue-50">

      {/* FLOATING LINES BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingLines
          enableRainbow={false}
          gridColor="#6fa2fa"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={1.0}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-4xl px-6 mx-auto flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Innovate. <span className="text-blue-600">Secure.</span> Transform.
            </h1>

            <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
              Delivering secure, scalable, and intelligent IT solutions —
              from infrastructure and cybersecurity to cloud and managed services.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap justify-center">
              <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition">
                Schedule Demo
              </button>

              <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}

export default Hero
