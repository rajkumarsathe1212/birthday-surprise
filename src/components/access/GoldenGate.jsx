// src/components/access/GoldenGate.jsx

import { motion } from "framer-motion";

function GoldenGate({
  isOpen,
}) {
  return (
    <div
      className="
        relative
        w-64
        h-48
        mx-auto
        perspective-[1000px]
      "
    >
      <motion.div
        animate={{
          rotateY: isOpen ? -110 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          left-0
          top-0

          w-1/2
          h-full

          bg-gradient-to-b
          from-yellow-300
          to-yellow-500

          rounded-l-xl

          origin-left
        "
      />

      <motion.div
        animate={{
          rotateY: isOpen ? 110 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          right-0
          top-0

          w-1/2
          h-full

          bg-gradient-to-b
          from-yellow-300
          to-yellow-500

          rounded-r-xl

          origin-right
        "
      />
    </div>
  );
}

export default GoldenGate;