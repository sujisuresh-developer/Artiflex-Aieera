import { createPortal } from "react-dom"
import { motion } from "framer-motion"

const emojis = ["❓", "💡", "🔐", "☁️", "🛡️", "⚙️"]

const EmojiBackground = () => {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 20,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            fontSize: "2.3rem",
            opacity: 0.45,
          }}
          /* 👇 appear immediately */
          initial={{ top: 0 }}

          /* 👇 fall faster */
          animate={{ top: "110%" }}

          transition={{
            duration: 7 + Math.random() * 5, //  much faster
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 0.4, //  almost instant
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </motion.div>
      ))}
    </div>,
    document.body
  )
}

export default EmojiBackground
