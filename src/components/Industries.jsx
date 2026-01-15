import { motion } from "framer-motion"

const industries = [
  {
    title: "Energy",
    desc: "Secure and scalable IT infrastructure supporting energy production and monitoring.",
    img: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
  },
  {
    title: "FinTech",
    desc: "High-performance secure platforms for financial and payment systems.",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721299.png",
  },
  {
    title: "Healthcare",
    desc: "Reliable IT ensuring patient data protection and system stability.",
    img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  },
  {
    title: "Manufacturing",
    desc: "Technology solutions enhancing automation and production workflows.",
    img: "https://cdn-icons-png.flaticon.com/512/2942/2942813.png",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Scalable cloud systems enabling seamless digital commerce.",
    img: "https://cdn-icons-png.flaticon.com/512/3081/3081648.png",
  },
]

/* KEEP YOUR ORIGINAL ANIMATION */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
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

        {/* HORIZONTAL SCROLL ONLY */}
        <div
          className="
    overflow-x-auto
    cursor-grab active:cursor-grabbing
    scroll-smooth
    snap-x snap-mandatory
    industries-scroll
  "
        >

          <div className="flex gap-8 w-max mx-auto pb-6 snap-start">


            {industries.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="relative group snap-start"
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

                  {/* DARK BLUE HOVER FLOW */}
                  <div
                    className="
                      absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-gradient-to-br
                      from-[#0A2A5A]
                      via-[#0F4C81]
                      to-[#38BDF8]
                    "
                  />

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col h-full">

                    {/* IMAGE */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 mb-6 object-contain"
                    />

                    <h3 className="text-xl font-semibold text-slate-500 group-hover:text-white transition">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-600 group-hover:text-blue-100 text-sm leading-relaxed transition">
                      {item.desc}
                    </p>

                    <div className="flex-grow" />
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Industries
