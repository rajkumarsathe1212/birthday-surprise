// src/components/effects/FloatingStars.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function FloatingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 6 + 4,
      duration: Math.random() * 4 + 2,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-yellow-200"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.div>
      ))}
    </>
  );
}

export default FloatingStars;