// src/components/effects/BackgroundEffects.jsx

import FloatingStars from "./FloatingStars";
import FloatingHearts from "./FloatingHearts";

function BackgroundEffects() {
  return (
    <div
      className="
        fixed
        inset-0

        overflow-hidden

        pointer-events-none

        -z-10
      "
    >
      {/* Base Gradient */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-pink-100
          via-rose-50
          to-purple-100
        "
      />

      {/* Glow 1 */}
      <div
        className="
          absolute

          top-20
          left-[-100px]

          w-72
          h-72

          bg-pink-300/30

          blur-[120px]

          rounded-full
        "
      />

      {/* Glow 2 */}
      <div
        className="
          absolute

          bottom-20
          right-[-100px]

          w-80
          h-80

          bg-purple-300/30

          blur-[120px]

          rounded-full
        "
      />

      <FloatingStars />
      <FloatingHearts />
    </div>
  );
}

export default BackgroundEffects;