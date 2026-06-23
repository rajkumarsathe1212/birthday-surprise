// src/sections/NotesSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import FloatingNote from "../components/notes/FloatingNote";

import { notes } from "../data/notes";

function NotesSection() {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <SectionContainer id="notes">
      <div className="w-full text-center">

        <Title>Floating Love Notes 💌</Title>

        {/* FLOATING GRID */}
        <div className="relative flex flex-wrap justify-center gap-4 mt-8">

          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
              }}
            >
              <FloatingNote
                note={note}
                onClick={() => setSelectedNote(note)}
              />
            </motion.div>
          ))}

        </div>

        {/* EXPANDED MODAL */}
        <AnimatePresence>
          {selectedNote && (
            <motion.div
              className="
                fixed inset-0
                bg-black/60
                flex items-center justify-center
                z-50
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="
                  bg-white/80
                  backdrop-blur-2xl
                  border
                  border-white/40
                  p-8
                  rounded-3xl
                  text-gray-800
                  max-w-md
                  text-center
                  shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-xl">
                  {selectedNote}
                </p>

                <button
                  onClick={() => setSelectedNote(null)}
                  className="
                    mt-6
                    bg-pink-500
                    px-6 py-2
                    rounded-full
                  "
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SectionContainer>
  );
}

export default NotesSection;