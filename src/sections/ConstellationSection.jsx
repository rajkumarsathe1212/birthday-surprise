// src/sections/ConstellationSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import ConstellationMap from "../components/constellation/ConstellationMap";

function ConstellationSection() {
  const [selected, setSelected] = useState(null);

  const memories = [
    {
      id: 1,
      title: "First Hello ❤️",
      description:
        "A simple hello that became something much more special.",
      left: "15%",
      top: "20%",
    },
    {
      id: 2,
      title: "Late Night Talks 🌙",
      description:
        "Conversations that somehow made time disappear.",
      left: "65%",
      top: "15%",
    },
    {
      id: 3,
      title: "Random Laughs 😄",
      description:
        "The kind of laughs only we understand.",
      left: "40%",
      top: "45%",
    },
    {
      id: 4,
      title: "Special Moments ✨",
      description:
        "Small moments that became unforgettable.",
      left: "70%",
      top: "70%",
    },
    {
      id: 5,
      title: "Today ❤️",
      description:
        "Every memory led to this birthday journey.",
      left: "20%",
      top: "75%",
    },
  ];

  return (
    <SectionContainer id="constellation">
      <div className="w-full">
        <Title>
          Memory Constellation ✨
        </Title>

        <p className="text-center text-slate-700 mb-10">
          Tap a star to reveal a hidden memory 💖
        </p>

        <ConstellationMap
          memories={memories}
          onSelect={setSelected}
        />

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                mt-8
                mx-auto
                max-w-sm

                bg-white/20
                backdrop-blur-xl

                border
                border-white/30

                rounded-3xl
                p-6

                text-center
                shadow-xl
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-800
                  mb-3
                "
              >
                {selected.title}
              </h3>

              <p
                className="
                  text-slate-700
                  leading-relaxed
                "
              >
                {selected.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}

export default ConstellationSection;