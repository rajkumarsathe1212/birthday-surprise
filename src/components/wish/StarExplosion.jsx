// src/components/wish/StarExplosion.jsx

import { motion } from "framer-motion";

function StarExplosion() {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      className="
        absolute
        inset-0

        flex
        items-center
        justify-center

        pointer-events-none
      "
    >
      <div className="text-5xl">
        ✨ 💖 ✨ 🌸 ✨ ❤️ ✨
      </div>
    </motion.div>
  );
}

export default StarExplosion;