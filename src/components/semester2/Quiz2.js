import React, { useState } from "react";
import "./Quiz2.css";

const quizQuestions = [
  {
    question: "My friends ... basketball every weekend.",
    options: ["Play", "Plays", "Playing", "Played", "Player"],
    correctAnswer: 0,
  },
  {
    question: "The sun ... in the east.",
    options: ["Rises", "Rise", "Rising", "Risen"],
    correctAnswer: 0,
  },
  {
    question: "What time ... you usually wake up?",
    options: ["Do", "Does", "Doing", "Done"],
    correctAnswer: 0,
  },
  {
    question: "The train ... at 10:00.",
    options: ["Leave", "Leaves", "Leaving", "Left"],
    correctAnswer: 1,
  },
  {
    question: "The cat ... on the table.",
    options: ["sit", "sits", "sitting", "sat"],
    correctAnswer: 1,
  },
  {
    question: "Because I always ... to school early.",
    options: ["Goes", "Go", "Going", "Gone"],
    correctAnswer: 1,
  },
  {
    question: "They ... me so well.",
    options: ["Knew", "Known", "Know", "Knows"],
    correctAnswer: 2,
  },
  {
    question: "She ... a bread every morning.",
    options: ["Eating", "Ate", "Eats", "Eat"],
    correctAnswer: 2,
  },
  {
    question: "They are my lecturers. They ... us in a University every day.",
    options: ["Teaches", "Teach", "Is teaching", "Taught"],
    correctAnswer: 1,
  },
  {
    question:
      "Every morning the watchman turns off all the lights and ... around the building every half an hour.",
    options: ["walking", "walked", "walks", "walk"],
    correctAnswer: 2,
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);

    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = index;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizQuestions.length - 1));
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const finishQuiz = () => setShowScore(true);

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Kuis Selesai!</h2>
          <p>Skor Anda: {score} / {quizQuestions.length}</p>
          <h3>Kunci Jawaban:</h3>
          <ul className="answers-list">
            {quizQuestions.map((question, index) => (
              <li key={index} className="answer-item">
                <strong>{index + 1}. {question.question}</strong>
                <p>
                  Jawaban Benar:{" "}
                  <span className="correct-answer">
                    {question.options[question.correctAnswer]}
                  </span>
                </p>
                <p>
                  Jawaban Anda:{" "}
                  <span
                    className={
                      selectedAnswers[index] === question.correctAnswer
                        ? "correct"
                        : "incorrect"
                    }
                  >
                    {selectedAnswers[index] !== undefined
                      ? question.options[selectedAnswers[index]]
                      : "Tidak Dijawab"}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <button onClick={() => window.location.reload()}>Ulangi</button>
        </div>
      ) : (
        <div className="quiz-container">
          <div className="question-numbers">
            {quizQuestions.map((_, index) => (
              <div
                key={index}
                className={`number ${
                  currentQuestion === index ? "active" : ""
                }`}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div className="question-section">
            <h3>{quizQuestions[currentQuestion].question}</h3>
            <div className="options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    selectedAnswers[currentQuestion] === index
                      ? index === quizQuestions[currentQuestion].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  onClick={() =>
                    selectedAnswers[currentQuestion] === undefined &&
                    handleAnswer(index)
                  }
                >
                  {String.fromCharCode(97 + index)}. {option}
                </div>
              ))}
            </div>
          </div>

          <div className="navigation">
            <button onClick={prevQuestion} disabled={currentQuestion === 0}>
              Prev
            </button>
            <button
              onClick={
                currentQuestion === quizQuestions.length - 1
                  ? finishQuiz
                  : nextQuestion
              }
            >
              {currentQuestion === quizQuestions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}