// src/components/common/Title.jsx

import { motion } from "framer-motion";

function Title({
  children,
  className = "",
}) {
  return (
    <motion.h2
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      className={`
        text-4xl
        sm:text-5xl
        md:text-6xl

        font-extrabold

        text-center

        bg-gradient-to-r
        from-pink-500
        via-rose-400
        to-purple-500

        bg-clip-text
        text-transparent

        leading-tight

        mb-6

        ${className}
      `}
    >
      {children}
    </motion.h2>
  );
}

export default Title;