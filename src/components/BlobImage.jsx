import { motion } from "framer-motion"

const BlobImage = () => {
  return (
    <motion.div
      className="relative w-[320px] h-[380px] md:w-[300px] md:h-[320px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      
      {/* BLUE SHAPE */}
      <motion.div
        className="absolute inset-0 bg-blue-700"
        style={{
          borderRadius: "58% 42% 65% 35% / 55% 38% 62% 45%",
        }}
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* DOTTED PATTERN */}
      <div
        className="absolute bottom-3 left-3 w-28 h-28 bg-[radial-gradient(#ffffff55_1.5px,transparent_1.5px)] bg-[length:10px_10px]"
        style={{
          borderRadius: "50%",
        }}
      />

      {/* IMAGE MASK */}
      <div
        className="absolute inset-3 overflow-hidden p-2"
        style={{
          borderRadius: "60% 40% 60% 40% / 50% 45% 55% 50%",
        }}
      >
        {/* IMAGE WITH GAP */}
        <motion.img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team working"
          className="w-full h-full object-cover rounded-[70%] shadow-lg"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

    </motion.div>
  )
}

export default BlobImage
