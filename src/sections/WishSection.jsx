// src/sections/WishSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";

import WishStar from "../components/wish/WishStar";
import StarExplosion from "../components/wish/StarExplosion";

function WishSection() {
  const [exploded, setExploded] = useState(false);

  const handleClick = () => {
    setExploded(true);

    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  return (
    <SectionContainer id="wish">
      <div className="w-full text-center">

        <Title>
          Wish Upon A Star ✨
        </Title>

        <p
          className="
            text-slate-700
            mb-10
          "
        >
          Tap the magical star and make a birthday wish 🌟
        </p>

        <div
          className="
            relative

            min-h-[260px]

            flex
            items-center
            justify-center
          "
        >
          {!exploded && (
            <WishStar
              onClick={handleClick}
            />
          )}

          <AnimatePresence>

            {exploded && (
              <>
                <StarExplosion />

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    max-w-md

                    bg-white/20
                    backdrop-blur-xl

                    border
                    border-white/30

                    rounded-3xl

                    p-6

                    mx-auto
                  "
                >
                  <div className="text-5xl mb-4">
                    🌟
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-pink-700
                      mb-3
                    "
                  >
                    Your Wish Is On Its Way ✨
                  </h3>

                  <p
                    className="
                      text-slate-700
                      leading-relaxed
                    "
                  >
                    May this birthday bring you
                    endless smiles,
                    beautiful surprises,
                    and everything your heart
                    secretly wishes for ❤️
                  </p>
                </motion.div>
              </>
            )}

          </AnimatePresence>
        </div>

      </div>
    </SectionContainer>
  );
}

export default WishSection;