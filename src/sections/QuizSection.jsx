// src/sections/QuizSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionContainer from "../components/common/SectionContainer";
import Title from "../components/common/Title";
import QuizCard from "../components/quiz/QuizCard";

import { quizQuestions } from "../data/quiz";

function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const correct = quizQuestions[current].answer;

    if (answer === correct) {
      setMessage("Correct 😏");
    } else {
      setMessage("Try Again Princess 😆");
      return;
    }

    setTimeout(() => {
      setMessage("");

      if (current + 1 < quizQuestions.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  const restart = () => {
    setCurrent(0);
    setShowResult(false);
    setMessage("");
  };

  return (
    <SectionContainer id="quiz">
      <div className="w-full text-center">

        <Title>The Love Quiz 😏</Title>

        {/* MESSAGE */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 text-lg font-semibold text-pink-700"
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* QUIZ */}
        {!showResult ? (
          <QuizCard
            question={quizQuestions[current].question}
            options={quizQuestions[current].options}
            onAnswer={handleAnswer}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl max-w-md mx-auto"
          >
            <h2 className="text-3xl text-pink-700 font-bold mb-4">
              Quiz Completed ❤️
            </h2>

            <p className="mb-6 text-slate-700">
              You know us better than expected 😌
            </p>

            <button
              onClick={restart}
              className="
                bg-pink-500
                px-6 py-3
                rounded-full
              "
            >
              Try Again
            </button>
          </motion.div>
        )}

      </div>
    </SectionContainer>
  );
}

export default QuizSection;