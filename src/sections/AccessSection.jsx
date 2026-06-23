// src/sections/AccessSection.jsx

import { useState } from "react";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import GoldenGate from "../components/access/GoldenGate";

function AccessSection() {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleUnlock = () => {
    if (!name.trim()) return;

    setIsOpen(true);
  };

  return (
    <SectionContainer id="access">
      <div className="text-center max-w-md w-full">

        <Title>
          A Secret Portal ✨❤️
        </Title>

        <p className="text-slate-700 mb-8">
          The stars told me only one person 
          can unlock this birthday journey ❤️
        </p>

        <GoldenGate isOpen={isOpen} />

        <input
          type="text"
          placeholder="Enter your name ❤️"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="
            mt-8
            w-full

            rounded-2xl

            px-5
            py-4

            bg-white/30
            backdrop-blur-xl

            outline-none

            text-slate-700
          "
        />

        <button
          onClick={handleUnlock}
          className="
            mt-5

            px-8
            py-3

            rounded-full

            bg-pink-500

            text-white
          "
        >
          Unlock ❤️
        </button>

        {isOpen && (
          <p
            className="
              mt-6
              text-green-600
              font-semibold
            "
          >
            Access Granted Princess 👑
          </p>
        )}
      </div>
    </SectionContainer>
  );
}

export default AccessSection;