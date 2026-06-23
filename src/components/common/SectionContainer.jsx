// src/components/common/SectionContainer.jsx

import { motion } from "framer-motion";

function SectionContainer({
  children,
  id,
}) {
  return (
    <motion.section
      id={id}
      className="
        min-h-screen

        flex
        items-center
        justify-center

        px-5
        sm:px-8

        py-20
        sm:py-24

        relative
        z-10

        overflow-hidden
      "
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.section>
  );
}

export default SectionContainer;