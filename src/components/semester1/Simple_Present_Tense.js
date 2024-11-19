import React, { useState } from "react";
import "./Simple_Present_Tense.css";

const quizQuestions = [
  {
    question: "My friends ... basketball every weekend.",
    options: [
      "Play",
      "Plays",
      "Playing",
      "Played",
      "Player",
    ],
    correctAnswer: 0,
  },
  {
    question: "The sun ... in the east.",
    options: [
      "Rises",
      "Rise",
      "Rising",
      "Risen",
    ],
    correctAnswer: 0,
  },  {
    question: "What time ... you usually wake up?",
    options: [
      "Do",
      "Does",
      "Doing",
      "Done",
    ],
    correctAnswer: 0,
  },
  {
      question: "The train ... at 10:00.?",
      options: [
        "Leave", 
        "Leaves", 
        "Leaving",
        "Left"
      ],
      correctAnswer: 1,
    },
    {
      question: "The cat ... on the table.",
      options: [
        "sit", 
        "sits",
        "sitting", 
        "sat",
      ],
      correctAnswer: 1,
    },
    {
      question: "Because i always ... to school early.",
      options: [
        "Goes", 
        "Go", 
        "Going", 
        "Gone",
      ],
      correctAnswer: 0,
    },
    {
      question: "They ... me so well.",
      options: [
        "Knew", 
        "Known", 
        "Know", 
        "Knows"
      ],
      correctAnswer: 2,
    },
    {
      question: " She .... a bread every morning?",
      options: [
        "Eating", 
        "Ate", 
        "Eats", 
        "Eat"
      ],
      correctAnswer: 3,
    },
    {
      question: "They are my lecturer. They...us in an University everyday.",
      options: [
        "Teaches", 
        "Teach", 
        "Is teaching", 
        "Taught"
      ],
      correctAnswer: 1,
    },
    {
      question: "Every morning watchman turns off all the lights and...around the building every half an hour.",  
      options: [
        "walking",
        "walked",
        "walks",
        "walk",
      ],
      correctAnswer: 2,
    },
   
  ];
  export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setFeedback("Jawaban Anda benar!");
    } else {
      setFeedback(
        `Jawaban Anda salah! Jawaban benar: ${
          quizQuestions[currentQuestion].options[
            quizQuestions[currentQuestion].correctAnswer
          ]
        }`
      );
    }
    setSelectedAnswer(index);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, quizQuestions.length - 1));
    setFeedback("");
    setSelectedAnswer(null);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    setFeedback("");
    setSelectedAnswer(null);
  };

  const finishQuiz = () => setShowScore(true);

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Kuis Selesai!</h2>
          <p>Skor Anda: {score} / {quizQuestions.length}</p>
          <button onClick={() => window.location.reload()}>Ulangi</button>
        </div>
      ) : (
        <div className="quiz-container">
          <div className="question-section">
            <h3>{quizQuestions[currentQuestion].question}</h3>
            <div className="options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    selectedAnswer === index
                      ? index === quizQuestions[currentQuestion].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  onClick={() =>
                    selectedAnswer === null && handleAnswer(index)
                  }
                >
                  {String.fromCharCode(97 + index)}. {option}
                </div>
              ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
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
        </div>
      )}
    </div>
  );
}