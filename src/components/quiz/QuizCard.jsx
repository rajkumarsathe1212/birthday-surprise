// src/components/quiz/QuizCard.jsx

import GlassCard from "../common/GlassCard";

function QuizCard({
  question,
  options,
  onAnswer,
}) {
  return (
    <GlassCard className="max-w-md mx-auto">
      <h3
        className="
          text-xl
          sm:text-2xl

          font-bold

          text-slate-800

          mb-6
        "
      >
        {question}
      </h3>

      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl py-3 font-semibold shadow-md active:scale-95 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </GlassCard>
  );
}

export default QuizCard;