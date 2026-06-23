// src/sections/HeroSection.jsx

import { motion } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import TypewriterText from "../components/hero/TypewriterText";

function HeroSection() {
  return (
    <SectionContainer id="hero">
      <div className="text-center max-w-xl mx-auto">
        <motion.div
          className="text-7xl mb-8"
          animate={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          🎂✨
        </motion.div>

        <Title>Happy Birthday ❤️</Title>

        <TypewriterText
          text={`Hey Birthday Girl ❤️

Before the world celebrates you,
I wanted to create something special just for you.

So sit back,
scroll slowly,
and enjoy your little surprise ✨`}
        />

        <motion.div
          className="mt-10 text-3xl"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default HeroSection;
