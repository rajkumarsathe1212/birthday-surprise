// src/components/wish/WishStar.jsx

import { motion } from "framer-motion";

function WishStar({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="
        text-7xl
        cursor-pointer
        drop-shadow-xl
      "
      animate={{
        scale: [1, 1.15, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      ⭐
    </motion.button>
  );
}

export default WishStar;