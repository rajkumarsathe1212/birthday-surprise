// src/components/common/AnimatedButton.jsx

import { motion } from "framer-motion";

function AnimatedButton({ children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 25px rgba(255,182,193,0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="
        px-6 py-3
        rounded-full
        bg-pink-400
        text-white
        font-medium
        glow-hover
      "
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;