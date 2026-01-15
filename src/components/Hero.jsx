import { motion } from "framer-motion"
import DarkVeil from "./DarkVeil"

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <DarkVeil />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 text-center">

        <motion.div
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >

          {/* HEADING */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.1, ease: "easeOut" },
              },
            }}
            className="text-4xl md:text-6xl font-bold leading-tight mt-24 text-slate-900"
          >
            The all-in-one IT solution to turn
            <br />
            <span className="text-blue-600">
              infrastructure into uptime
            </span>
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            }}
            className="mt-6 text-lg md:text-xl text-slate-700"
          >
            Powering businesses with secure, scalable, and reliable
            technology foundations.
          </motion.p>

          {/* TAGS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {[
              "Connect.",
              "Protect.",
              "Perform.",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-6 py-2 rounded-full
                  bg-white/60 backdrop-blur-md
                  border border-blue-200
                  text-slate-800 text-sm md:text-base
                "
              >
                {item}
              </span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
