// src/components/common/GlassCard.jsx

import { motion } from "framer-motion";

function GlassCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        bg-white/10
        backdrop-blur-3xl

        border
        border-white/20

        rounded-[28px]

        p-5
        sm:p-6

        shadow-[0_8px_30px_rgba(0,0,0,0.15)]

        relative
        overflow-hidden

        ${className}
      `}
    >
      {/* Soft Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;