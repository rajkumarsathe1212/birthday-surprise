// src/sections/CakeSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";

import BirthdayCake from "../components/cake/BirthdayCake";

function CakeSection() {
  const [stage, setStage] = useState(0);

  const nextStage = () => {
    if (stage === 2) {
      // 🎉 final celebration
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      });
    }

    setStage((prev) => prev + 1);
  };

  return (
    <SectionContainer id="cake">
      <div className="text-center w-full">
        <Title>Birthday Cake 🎂</Title>

        <BirthdayCake stage={stage} />

        <AnimatePresence mode="wait">
          {/* STAGE 0 */}
          {stage === 0 && (
            <motion.button
              key="light"
              onClick={nextStage}
              className="
                mt-10
                px-6 py-3
                bg-pink-500
                rounded-full
                text-white
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Light Candles ✨
            </motion.button>
          )}

          {/* STAGE 1 */}
          {stage === 1 && (
            <motion.button
              key="wish"
              onClick={nextStage}
              className="
                mt-10
                px-6 py-3
                bg-purple-500
                rounded-full
                text-white
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Make a Wish 💫
            </motion.button>
          )}

          {/* STAGE 2 */}
          {stage === 2 && (
            <motion.button
              key="blow"
              onClick={nextStage}
              className="
                mt-10
                px-6 py-3
                bg-rose-500
                rounded-full
                text-white
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Blow Candles 🎉
            </motion.button>
          )}

          {/* STAGE 3 */}
          {stage >= 3 && (
            <motion.div
              className="
    mt-10
    text-center
  "
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              <h3
                className="
      text-3xl
      font-bold
      text-pink-600
    "
              >
                Happy Birthday ❤️✨
              </h3>

              <p className="mt-3 text-slate-700">
                May every wish you make today come true 🌸
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}

export default CakeSection;
