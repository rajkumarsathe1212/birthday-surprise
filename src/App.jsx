import HeroSection from "./sections/HeroSection";
import AccessSection from "./sections/AccessSection";
import StorySection from "./sections/StorySection";
import ConstellationSection from "./sections/ConstellationSection";
import HeartCounterSection from "./sections/HeartCounterSection";
import CakeSection from "./sections/CakeSection";
import QuizSection from "./sections/QuizSection";
import NotesSection from "./sections/NotesSection";
import LetterSection from "./sections/LetterSection";
import WishSection from "./sections/WishSection";
import FinalSection from "./sections/FinalSection";

import BackgroundEffects from "./components/effects/BackgroundEffects";
import MusicPlayer from "./components/music/MusicPlayer";

function App() {
  return (
    <div className="relative">
      <BackgroundEffects />

      <MusicPlayer />

      <div className="relative z-10">
        <HeroSection id="hero" />
        <AccessSection />
        <StorySection />
        <ConstellationSection />
        <HeartCounterSection />
        <CakeSection />
        <QuizSection />
        <NotesSection />
        <LetterSection />
        <WishSection />
        <FinalSection />
      </div>
    </div>
  );
}

export default App;