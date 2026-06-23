// src/components/letter/Envelope.jsx

import { motion } from "framer-motion";

function Envelope({ onOpen }) {
  return (
    <motion.div
      onClick={onOpen}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="relative w-60 h-40 mx-auto cursor-pointer"
    >
      {/* Body */}
      <div
        className="
          absolute
          inset-0

          rounded-2xl

          bg-gradient-to-br
          from-pink-300
          to-pink-400

          shadow-2xl
        "
      />

      {/* Flap */}
      <motion.div
        animate={{
          rotateX: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-full h-24 bg-pink-500 origin-top [clip-path:polygon(0_0,100%_0,50%_100%)]"
      />

      {/* Icon */}
      <div
        className="absolute inset-0 flex items-center justify-center text-5xl"
      >
        💌
      </div>
    </motion.div>
  );
}

export default Envelope;