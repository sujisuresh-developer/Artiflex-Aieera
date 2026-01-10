import { motion } from "framer-motion"
import logo from "../assets/logo.png"

const WhyChooseUs = () => {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl font-bold mb-2">
          Why Choose Us?
        </h2>

        {/* LOGO – appears ONLY when section enters viewport */}
        <motion.img
          src={logo}
          alt="Artiflex IT"
          initial={{ opacity: 0, scale: 1, y: -19 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="mx-auto mb-6 w-50"
        />

        {/* CONTENT */}
        <p className="text-gray-600 leading-relaxed">
          We develop custom IT solutions designed to align with your unique
          business needs, ensuring efficiency, scalability, and security.
        </p>

        <p className="mt-4 text-gray-600">
          You gain a dedicated technology partner committed to understanding
          your requirements and delivering secure, future-ready solutions.
        </p>
      </div>
    </section>
  )
}

export default WhyChooseUs
