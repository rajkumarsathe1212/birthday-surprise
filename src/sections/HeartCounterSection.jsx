// src/sections/HeartCounterSection.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import ReasonCard from "../components/counter/ReasonCard";

import { reasons } from "../data/reasons";

function HeartCounterSection() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    if (index >= reasons.length) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1400);

    return () => clearTimeout(timer);
  }, [index, started]);

  const handleStart = () => {
    setStarted(true);
    setIndex(0);
  };

  const handleReplay = () => {
    setIndex(0);
    setStarted(true);
  };

  return (
    <SectionContainer id="heart-counter">
      <div className="w-full text-center">
        <Title>
          Reasons I Adore You ❤️
        </Title>

        {!started && (
          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-rose-500
              text-white
              font-semibold
              shadow-lg
            "
          >
            Show Me ❤️
          </motion.button>
        )}

        {started && (
          <>
            <motion.div
              className="text-6xl md:text-8xl mb-10 mt-8"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            >
              ❤️ {index}
            </motion.div>

            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                {index > 0 && index <= reasons.length && (
                  <ReasonCard
                    key={index}
                    count={index}
                    reason={reasons[index - 1]}
                  />
                )}
              </AnimatePresence>
            </div>

            {index >= reasons.length && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-10"
              >
                <p className="text-slate-700 text-lg mb-6">
                  I could go on forever... ❤️
                </p>

                <button
                  onClick={handleReplay}
                  className="
                    px-8 py-3
                    rounded-full
                    bg-pink-500
                    text-white
                  "
                >
                  Replay ❤️
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </SectionContainer>
  );
}

export default HeartCounterSection;