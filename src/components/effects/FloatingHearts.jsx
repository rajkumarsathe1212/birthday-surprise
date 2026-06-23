// src/components/effects/FloatingHearts.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-15),
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 12 + 16,
          duration: Math.random() * 4 + 4,
        },
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300"
          style={{
            left: `${heart.left}%`,
            bottom: "-40px",
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: -1200,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}

export default FloatingHearts;