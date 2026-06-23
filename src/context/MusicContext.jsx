// src/context/MusicContext.jsx

import { createContext, useContext, useRef, useState } from "react";

import birthdaySong from "../assets/music/birthday-song-perfect.mp3";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const audioRef = useRef(new Audio(birthdaySong));

  const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = async () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.loop = true;
      audio.volume = 0.5;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        toggleMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}