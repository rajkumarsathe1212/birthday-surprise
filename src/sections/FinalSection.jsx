// src/sections/FinalSection.jsx

import { motion } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";

function FinalSection() {
  return (
    <SectionContainer id="final">
      <div
        className="
          text-center
          max-w-xl
          mx-auto
        "
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ❤️
        </motion.div>

        <Title>
          Happy Birthday ❤️
        </Title>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-slate-700
            text-lg
            leading-relaxed
          "
        >
          Thank you for every smile,
          every conversation,
          and every moment we've shared.

          <br />
          <br />

          I hope this year brings you
          happiness,
          success,
          peace,
          and everything your heart wishes for.

          <br />
          <br />

          You deserve the very best ❤️
        </motion.p>

        {/* SIGNATURE */}
<motion.div
  className="
    mt-10
    text-pink-600
    font-semibold
  "
  animate={{
    opacity: [0.6, 1, 0.6],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  Made with ❤️ by Raj
</motion.div>

{/* FINAL TAGLINE */}
<div className="mt-10 flex justify-center">
  <p
    className="
      inline-flex
      items-center

      px-6
      py-3

      rounded-full

      bg-gradient-to-r
      from-pink-500
      via-rose-500
      to-purple-500

      text-white
      font-semibold

      shadow-xl
    "
  >
    ❤️ Forever Your Favorite Notification ❤️
  </p>
</div>

{/* BACK TO TOP BUTTON */}
<motion.button
  onClick={() => {
    document
      .getElementById("hero")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="
    mt-6
    px-6
    py-3
    rounded-full
    bg-white/20
    backdrop-blur-xl
    border
    border-white/30
    text-slate-700
    font-medium
    shadow-lg
  "
>
  ↑ Back To Top
</motion.button>
      </div>
    </SectionContainer>
  );
}

export default FinalSection;