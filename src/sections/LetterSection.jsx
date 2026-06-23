// src/sections/LetterSection.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import Envelope from "../components/letter/Envelope";

function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const fullText = `
Happy Birthday ❤️

It's funny how two people can meet online
and become such an important part of each other's lives.

You've already given me countless smiles,
memories, and moments that I genuinely treasure.

Thank you for being someone I can talk to,
laugh with,
and think about long after our conversations end.

Today is your special day,
and if I could, I'd fill the sky with stars just to celebrate you.

I hope this year brings you happiness,
success,
peace,
and everything your heart wishes for.

And most importantly...

Never forget how special you are. ❤️

Happy Birthday Princess 👑
`;

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [startTyping]);

  const handleOpen = () => {
    setIsOpen(true);

    setTimeout(() => {
      setStartTyping(true);
    }, 800);
  };

  return (
    <SectionContainer id="letter">
      <div className="w-full text-center">
        <Title>The Secret Letter 💌</Title>

        {/* ENVELOPE */}
        {!isOpen && <Envelope onOpen={handleOpen} />}

        {/* LETTER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                rotateX: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="mt-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 text-slate-700 max-w-md mx-auto text-left whitespace-pre-line min-h-[320px] shadow-2xl"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}

export default LetterSection;
