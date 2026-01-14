import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const services = [
  {
    title: "Infrastructure Solutions",
    subtitle: "Infrastructure services",
    description:
      "Build a resilient, high-performance IT foundation that ensures uptime and scalability.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    slug: "infrastructure-solutions",
  },
  {
    title: "Cyber Security",
    subtitle: "Security services",
    description:
      "Protect systems, networks, and data with advanced cyber defense strategies.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    slug: "cyber-security",
  },
  {
    title: "Application Security",
    subtitle: "Application services",
    description:
      "Secure applications against vulnerabilities across the entire SDLC.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    slug: "application-security",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Cloud services",
    description:
      "Accelerate growth with secure, scalable, and optimized cloud platforms.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    slug: "cloud-solutions",
  },
  {
    title: "Managed Services",
    subtitle: "Managed IT services",
    description:
      "Ensure continuous operations with proactive monitoring and expert support.",
    image:
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81",
    slug: "managed-services",
  },
  {
    title: "AMC Services",
    subtitle: "Support services",
    description:
      "Prevent downtime with reliable annual maintenance and IT support services.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYuYmq_1ZQDfv6RMEd_LhExRT_VFDjwkN6g&s",
    slug: "amc-services",
  },
]

/* 🔥 SLOW ROW-BY-ROW 3D FLIP VARIANTS */
const cardVariants = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    rotateX: 18,
    y: 80,
    scale: 0.88,
  },
  visible: (index) => {
    const columns = 3
    const row = Math.floor(index / columns)

    return {
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: row * 0.9 + (index % columns) * 0.15, // 👈 row first
        duration: 1.3, // 👈 slow & visible
        ease: "easeOut",
      },
    }
  },
}

const Services = () => {
  const navigate = useNavigate()

  return (
    <section className="text-white py-28 ">
      {/* 🔹 Perspective added INLINE (no external CSS) */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 ">
        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold text-white mb-16">
          Our Services
        </h2>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}

              whileHover={{
                rotateY: 8,
                rotateX: -6,
                y: -14,
                scale: 1.04,
              }}

              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}

              onClick={() => navigate(`/services/${service.slug}`)}
              className="
                cursor-pointer
                bg-white
                border border-gray-200
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                hover:border-blue-600
                transform-gpu
                transition-all
              "
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {service.subtitle}
                </p>

                <h3 className="text-xl font-semibold text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <span className="text-blue-600 text-xl font-bold">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
