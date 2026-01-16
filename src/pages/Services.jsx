import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import infra from "../assets/infra.jpg"
import cyber from "../assets/cyber.jpg"
import appli from "../assets/appli.jpg"
import cloud from "../assets/cloud.jpg"
import manage from "../assets/manage.jpg"
import amc from "../assets/amc.jpg"

const services = [
  {
    title: "Infrastructure Solutions",
    subtitle: "Infrastructure services",
    description:
      "Build a resilient, high-performance IT foundation that ensures uptime and scalability.",
    image: infra,
    slug: "infrastructure-solutions",
  },
  {
    title: "Cyber Security",
    subtitle: "Security services",
    description:
      "Protect systems, networks, and data with advanced cyber defense strategies.",
    image: cyber,
    slug: "cyber-security",
  },
  {
    title: "Application Security",
    subtitle: "Application services",
    description:
      "Secure applications against vulnerabilities across the entire SDLC.",
    image: appli,
    slug: "application-security",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Cloud services",
    description:
      "Accelerate growth with secure, scalable, and optimized cloud platforms.",
    image: cloud,
    slug: "cloud-solutions",
  },
  {
    title: "Managed Services",
    subtitle: "Managed IT services",
    description:
      "Ensure continuous operations with proactive monitoring and expert support.",
    image: manage,
    slug: "managed-services",
  },
  {
    title: "AMC Services",
    subtitle: "Support services",
    description:
      "Prevent downtime with reliable annual maintenance and IT support services.",
    image: amc,
    slug: "amc-services",
  },
]

/* ✅ SAME OPTIMIZED ANIMATION */
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
}

const Services = () => {
  const navigate = useNavigate()

  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-16">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className="
                cursor-pointer
                bg-white
                border border-slate-200
                rounded-xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition
                relative
                group
              "
            >
              {/* IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-40 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 relative">
                <p className="text-sm text-gray-500 mb-2">
                  {service.subtitle}
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* ✅ BLUE NAVIGATION ARROW */}
                <span
                  className="
                    absolute bottom-4 right-5
                    text-blue-600 text-xl font-semibold
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
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
