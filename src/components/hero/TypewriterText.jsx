// src/components/hero/TypewriterText.jsx

import { useEffect, useState } from "react";

function TypewriterText({
  text,
  speed = 60,
}) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p
      className="
        text-lg
        sm:text-xl
        text-slate-700
        leading-relaxed
        whitespace-pre-line
      "
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
}

export default TypewriterText;