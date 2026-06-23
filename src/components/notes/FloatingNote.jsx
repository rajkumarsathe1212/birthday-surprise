// src/components/notes/FloatingNote.jsx

import { motion } from "framer-motion";

function FloatingNote({
  note,
  onClick,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="
        cursor-pointer

        bg-white/20
        backdrop-blur-xl

        border
        border-white/30

        rounded-2xl

        px-5
        py-4

        text-gray-800
        font-medium

        shadow-lg

        max-w-[280px]
      "
    >
      {note}
    </motion.div>
  );
}

export default FloatingNote;