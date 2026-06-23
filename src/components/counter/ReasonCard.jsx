// src/components/counter/ReasonCard.jsx

import { motion } from "framer-motion";

function ReasonCard({ count, reason }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.4 }}
      className="
        bg-white/10
        backdrop-blur-2xl
        border
        border-white/20
        rounded-3xl
        p-8
        max-w-md
        text-center
        shadow-lg
      "
    >
      <div className="text-4xl mb-4">❤️</div>

      <h2 className="text-3xl font-bold mb-3">
        {count}
      </h2>

      <p className="text-gray-700 text-lg">
        {reason}
      </p>
    </motion.div>
  );
}

export default ReasonCard;