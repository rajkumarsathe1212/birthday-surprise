// src/components/constellation/MemoryStar.jsx

import { motion } from "framer-motion";

function MemoryStar({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.4,
        rotate: 15,
      }}
      whileTap={{
        scale: 0.9,
      }}
      animate={{
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        text-4xl
        drop-shadow-[0_0_20px_rgba(255,215,0,0.9)]
      "
    >
      ⭐
    </motion.button>
  );
}

export default MemoryStar;