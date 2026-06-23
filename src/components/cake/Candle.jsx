// src/components/cake/Candle.jsx

import { motion } from "framer-motion";

function Candle({
  isLit,
  blown,
}) {
  return (
    <div className="flex flex-col items-center">

      <motion.div
        animate={{
          opacity:
            isLit && !blown
              ? [0.5, 1, 0.5]
              : 0,

          scale:
            isLit && !blown
              ? [1, 1.3, 1]
              : 0,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className="
          w-3
          h-4

          bg-yellow-300

          rounded-full

          mb-1

          shadow-[0_0_20px_rgba(255,220,100,0.9)]
        "
      />

      <div
        className="
          w-2
          h-10

          bg-gradient-to-b
          from-pink-100
          to-pink-400

          rounded-full
        "
      />
    </div>
  );
}

export default Candle;