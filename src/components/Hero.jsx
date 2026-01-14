import { motion } from "framer-motion"
import TechWaveBackground from "./TechWaveBackground "


const Hero = () => {
  return (
    <section className="relative mt-[110px] min-h-screen overflow-hidden bg-[#050E1F]">

      {/* TECH WAVE BACKGROUND */}
      <TechWaveBackground />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050E1F]/90 via-[#0A2A5A]/70 to-[#0D3B66]/50" />

      {/* CENTERED CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="max-w-4xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The all-in-one IT solution to turn
            <br />
            <span className="text-blue-400">
              infrastructure into uptime
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Powering businesses with secure, scalable, and reliable
            technology foundations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "🔐 Secure. Scalable. Reliable.",
              "⚡ Faster support. Stronger systems.",
              "🌐 Connect. Protect. Perform.",
            ].map((item) => (
              <span
                key={item}
                className="px-6 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md text-sm md:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
