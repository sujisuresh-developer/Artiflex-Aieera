import { motion } from "framer-motion"
import GalaxyBackground from "./GalaxyBackground"

const Hero = () => {
  return (
    
    <section
      className="relative mt-[110px] h-[calc(100vh-80px)] min-h-[650px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://bernardmarr.com/img/The%205%20Biggest%20Cloud%20Computing%20Trends%20In%202021.jpg')",
      }}
      
    >
          
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-[#fdfdfd]/30" />
      <GalaxyBackground />

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 mx-auto flex flex-col items-center text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The all-in-one IT solution to turn
              <br />
              <span className="text-blue-200">
                infrastructure into uptime
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">
              Powering businesses with secure, scalable, and reliable
              technology foundations.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md">
                🔐 Secure. Scalable. Reliable.
              </span>
              <span className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md">
                ⚡ Faster support. Stronger systems.
              </span>
              <span className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md">
                🌐 Connect. Protect. Perform.
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  )
}

export default Hero
