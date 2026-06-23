// src/components/cake/BirthdayCake.jsx

import { motion } from "framer-motion";
import Candle from "./Candle";

function BirthdayCake({ stage }) {
  const candlesLit = stage >= 1;
  const candlesBlown = stage >= 3;

  return (
    <motion.div
      className="flex flex-col items-center"
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    >
      {/* CANDLES */}
      <div className="flex gap-3 mb-2">
        {[...Array(5)].map((_, i) => (
          <Candle
            key={i}
            isLit={candlesLit}
            blown={candlesBlown}
          />
        ))}
      </div>

      {/* TOP LAYER */}
      <div
        className="
          w-52
          h-12

          bg-pink-200

          rounded-t-3xl

          relative

          border-2
          border-pink-300
        "
      >
        <div
          className="
            absolute
            bottom-0
            w-full
            h-4

            bg-white/50
            rounded-b-full
          "
        />
      </div>

      {/* BOTTOM LAYER */}
      <div
        className="
          w-64
          h-24

          bg-pink-300

          rounded-3xl

          border-2
          border-pink-400

          shadow-xl
        "
      />

      {/* PLATE */}
      <div
        className="
          w-72
          h-4

          bg-white/50

          rounded-full

          mt-2
        "
      />
    </motion.div>
  );
}

export default BirthdayCake;