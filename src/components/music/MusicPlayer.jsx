// src/components/music/MusicPlayer.jsx

import { motion } from "framer-motion";
import { useMusic } from "../../context/MusicContext";

function MusicPlayer() {
  const { isPlaying, toggleMusic } =
    useMusic();

  return (
    <motion.button
      onClick={toggleMusic}
      whileTap={{
        scale: 0.9,
      }}
      animate={{
        scale: isPlaying
          ? [1, 1.05, 1]
          : 1,
      }}
      transition={{
        duration: 2,
        repeat: isPlaying
          ? Infinity
          : 0,
      }}
      className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl flex items-center justify-center"
    >
      <span className="text-2xl">
        {isPlaying
          ? "🎵"
          : "🎶"}
      </span>
    </motion.button>
  );
}

export default MusicPlayer;