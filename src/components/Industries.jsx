import { motion } from "framer-motion"

const industries = [
  {
    title: "Energy",
    desc: "Secure and scalable IT infrastructure solutions supporting energy production, distribution, and monitoring systems."
  },
  {
    title: "FinTech",
    desc: "High-performance and secure technology solutions for financial platforms and digital payment systems."
  },
  {
    title: "Healthcare",
    desc: "Reliable IT systems ensuring patient data protection, application stability, and operational efficiency."
  },
  {
    title: "Manufacturing",
    desc: "Technology-driven solutions enhancing automation, connectivity, and production workflows."
  },
  {
    title: "Retail & E-Commerce",
    desc: "Scalable IT and cloud solutions enabling secure digital commerce and seamless customer experiences."
  },
  {
    title: "Enterprise & IT Services",
    desc: "Enterprise-grade IT solutions designed to support complex business operations and managed services."
  }
]

/*  animation definition used everywhere */
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
      delay: i * 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
}

const Industries = () => {
  return (
    <section className="py-28  -mt-25">
      <div data-depth="1" className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 10, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false,margin: "-800px" }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-14 text-white"
        >
          Industries
        </motion.h2>

        {/* GRID */}
        <div data-depth="1.6" className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative rounded-xl"
            >



              {/* CARD */}
              <div className="relative bg-[#fdfdfd] rounded-xl p-6 border border-slate-200 shadow-sm group-hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
