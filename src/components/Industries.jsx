import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import energy from "../assets/energy.jpg"
import fintech from "../assets/fintech.jpg"
import health from "../assets/health.jpg"
import manufact from "../assets/manufact.jpg"
import retail from "../assets/retail.jpg"
import educ from "../assets/educ.jpg"
import start from "../assets/start.jpg"

const industries = [
  { title: "Energy", desc: "Secure and scalable IT infrastructure supporting energy production and monitoring.", img: energy },
  { title: "FinTech", desc: "High-performance secure platforms for financial and payment systems.", img: fintech },
  { title: "Healthcare", desc: "Reliable IT ensuring patient data protection and system stability.", img: health },
  { title: "Manufacturing", desc: "Technology solutions enhancing automation and production workflows.", img: manufact },
  { title: "Retail & E-Commerce", desc: "Scalable cloud systems enabling seamless digital commerce.", img: retail },
   { title: "Government & Education", desc: "Improve outcomes for children and families, and strengthen digital infrastructure.", img: educ },
    { title: "Startups & SMEs", desc: "Securing funding and ensuring business success.", img: start },


]

/* 🔒 YOUR ORIGINAL ANIMATION – UNCHANGED */
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.25,
      duration: 1,
      ease: "easeOut",
    },
  }),
}

const Industries = () => {
  const cardsRef = useRef([])
  const [activeIndex, setActiveIndex] = useState(null)

  /* ✅ MOBILE ONLY scroll detection */
  useEffect(() => {
    if (window.innerWidth >= 768) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index))
          }
        })
      },
      { threshold: 0.6 }
    )

    cardsRef.current.forEach(card => card && observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-16 text-white text-center"
        >
          INDUSTRIES
        </motion.h2>

        {/* SCROLL CONTAINER */}
        <div
          className="
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            cursor-grab active:cursor-grabbing
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          <div
            className="
              flex
              gap-4 md:gap-8     /* 👈 mobile smaller gap, desktop unchanged */
              w-max mx-auto
              pb-6
            "
          >
            {industries.map((item, index) => {
              const isMobileActive = index === activeIndex

              return (
                <motion.div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  data-index={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }}
                  whileHover={{ y: -10, scale: 1.03 }}  /* 🔒 desktop hover intact */
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="relative snap-center group"
                >
                  {/* CARD */}
                  <div
                    className="
                      relative w-[320px] h-[420px]
                      rounded-3xl p-8
                      bg-[#fdfdfd]
                      border border-slate-200
                      shadow-md
                      overflow-hidden
                    "
                  >
                    {/* 🔵 DESKTOP HOVER (UNCHANGED) */}
                    <div
                      className="
                        absolute inset-0 opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-300
                        bg-gradient-to-br
                        from-[#0A2A5A]
                        via-[#0F4C81]
                        to-[#38BDF8]
                      "
                    />

                    {/* 🔵 MOBILE ACTIVE ONLY */}
                    <div
                      className={`
    absolute inset-0
    bg-gradient-to-br
    from-[#0A2A5A]
    via-[#0F4C81]
    to-[#38BDF8]
    transition-opacity duration-300
    opacity-0
    group-hover:opacity-100       /* desktop hover */
    ${isMobileActive ? "opacity-100 md:opacity-0" : ""}
  `}
                    />



                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col h-full">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-40 h-30 mb-6 object-contain"
                      />

                      <h3
                        className={`
    text-xl font-semibold
    transition-colors duration-300
    text-slate-500
    group-hover:text-white        /* desktop hover */
    ${isMobileActive ? "text-white md:text-slate-500" : ""}
  `}
                      >
                        {item.title}
                      </h3>


                      <p
                        className={`
    mt-4 text-sm leading-relaxed
    transition-colors duration-300
    text-slate-600
    group-hover:text-blue-100     /* desktop hover */
    ${isMobileActive ? "text-blue-100 md:text-slate-600" : ""}
  `}
                      >
                        {item.desc}
                      </p>


                      <div className="flex-grow" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Industries
