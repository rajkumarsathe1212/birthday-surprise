// src/components/timeline/TimelineCard.jsx

import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";

function TimelineCard({
  title,
  description,
  icon,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="w-[88%]"
    >
      <GlassCard className="p-6">
        <div className="text-center">
          <motion.div
            className="text-4xl mb-3"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-bold mb-2 text-slate-700">
            {title}
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default TimelineCard;