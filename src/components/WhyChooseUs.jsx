import { motion } from "framer-motion"

const reasons = [
  {
    id: "01",
    title: "Custom IT Solutions",
    desc: "We develop custom IT solutions tailored to your unique business needs, ensuring efficiency, scalability, and security at every stage.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    bg: "bg-blue-100",
    border: "border-blue-400",
  },
  {
    id: "02",
    title: "Reliable Daily Operations",
    desc: "Our approach focuses on building reliable systems that support daily operations while minimizing downtime and disruptions.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    bg: "bg-indigo-100",
    border: "border-indigo-400",
  },
  {
    id: "03",
    title: "Future-Ready Systems",
    desc: "We prepare your IT environment for future growth by designing scalable, secure, and adaptable technology foundations.",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657",
    bg: "bg-cyan-100",
    border: "border-cyan-400",
  },
  {
    id: "04",
    title: "Trusted Technology Partner",
    desc: "By choosing Artiflex IT, you gain a dedicated technology partner committed to understanding your challenges and delivering solutions that truly fit.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    bg: "bg-emerald-100",
    border: "border-emerald-400",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-50 bg-[#fdfdfd] -mt-[100px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          Why Choose Us
        </h2>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-30">
          {reasons.map((item, index) => {
            const fromTop = index % 2 === 0
            const rotateValue = fromTop ? -3 : 3

            return (
              <motion.div
                key={item.id}

                /* 👇 start position */
                initial={{
                  opacity: 0,
                  y: fromTop ? -60 : 60,
                  rotate: rotateValue,
                }}

                /* 👇 end position */
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}

                /* 👇 ALWAYS animate when reached */
                viewport={{
                  once: false,
                  amount: 0.1,
                }}

                transition={{
                  delay: index * 0.10,
                  duration: 0.8,
                  ease: "easeOut",
                }}

                /* 👇 subtle hover lift */
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}

                className={`relative rounded-[80px] pt-24 pb-10 px-6 text-center border-2 ${item.border} ${item.bg}`}
              >
                {/* IMAGE */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* NUMBER */}
                <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-[#fdfdfd] shadow flex items-center justify-center font-bold text-blue-600">
                  {item.id}
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
