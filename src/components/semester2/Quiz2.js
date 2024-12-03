import React, { useState } from "react";
import "./Quiz2.css";

const quizQuestions = [
  {
    question: "What is the purpose of a narrative text?",
    options: [
      "To entertain or amuse the readers",
      "To explain how something works",
      "To provide arguments and opinions",
      "To describe things in general",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT a part of narrative text structure?",
    options: ["Orientation", "Complication", "Resolution", "Procedure"],
    correctAnswer: 3,
  },
  {
    question: "What is commonly found in the orientation of a narrative text?",
    options: [
      "Steps to do something",
      "Introduction of characters and setting",
      "Conflict resolution",
      "Writer's argument",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the complication in a narrative text describe?",
    options: [
      "The introduction of the main characters",
      "The problem faced by the characters",
      "The moral lesson of the story",
      "The steps to solve a problem",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is an example of narrative text?",
    options: ["A folk tale", "A manual", "An opinion article", "A news report"],
    correctAnswer: 0,
  },
  {
    question: "What is the main purpose of a procedural text?",
    options: [
      "To entertain the readers",
      "To describe a general phenomenon",
      "To explain how to do or make something",
      "To argue for or against an issue",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which part is NOT included in a procedural text?",
    options: ["Materials", "Steps", "Resolution", "Goal"],
    correctAnswer: 2,
  },
  {
    question: "What language feature is commonly used in procedural texts?",
    options: [
      "Past tense",
      "Imperative sentences",
      "Passive voice",
      "Descriptive adjectives",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the 'steps' section of a procedural text describe?",
    options: [
      "The tools required",
      "The goals to achieve",
      "The sequence of actions to be followed",
      "The writer's opinion",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is an example of procedural text?",
    options: [
      "A recipe",
      "A short story",
      "An essay",
      "A speech",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of an exposition text?",
    options: [
      "To describe objects in detail",
      "To explain how to do something",
      "To persuade or argue for an idea",
      "To narrate a sequence of events",
    ],
    correctAnswer: 2,
  },
  {
    question: "What structure is commonly found in an exposition text?",
    options: ["Introduction, Body, Conclusion", "Goal, Steps, Materials", "Orientation, Complication, Resolution", "Phenomenon, Description"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT a characteristic of an exposition text?",
    options: ["Factual evidence", "Use of arguments", "General statements", "Dialogues"],
    correctAnswer: 3,
  },
  {
    question: "What type of language is commonly used in exposition text?",
    options: [
      "Descriptive language",
      "Persuasive language",
      "Colloquial language",
      "Imaginative language",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is an example of an exposition text?",
    options: [
      "An editorial in a newspaper",
      "A user manual",
      "A legend",
      "A poem",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which sentence is in present continuous tense?",
    options: [
      "I play soccer every weekend.",
      "She is reading a book now.",
      "They went to the park yesterday.",
      "He has finished his homework.",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the correct form of present continuous tense?",
    options: [
      "Subject + has/have + verb",
      "Subject + verb + ing",
      "Subject + is/are/am + verb + ing",
      "Subject + will + verb",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is an example of present continuous tense?",
    options: [
      "They are cooking dinner at the moment.",
      "She cooked dinner last night.",
      "He cooks dinner every day.",
      "We have cooked dinner.",
    ],
    correctAnswer: 0,
  },
  {
    question: "What question is correctly using present continuous tense?",
    options: [
      "Are you studying for the test now?",
      "Do you study for the test now?",
      "Have you studied for the test?",
      "Will you study for the test?",
    ],
    correctAnswer: 0,
  },
  {
    question: "When is the present continuous tense used?",
    options: [
      "For actions happening now",
      "For habits or routines",
      "For past actions",
      "For future intentions",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a report text?",
    options: [
      "To describe things as they are",
      "To narrate events in sequence",
      "To provide arguments and opinions",
      "To give step-by-step instructions",
    ],
    correctAnswer: 0,
  },
  {
    question: "What structure is commonly used in report texts?",
    options: [
      "Introduction and description",
      "Goal and steps",
      "Orientation, complication, resolution",
      "Issue, argument, conclusion",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which language feature is common in report texts?",
    options: [
      "Imaginative descriptions",
      "Present tense",
      "Metaphorical language",
      "Persuasive arguments",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is usually described in a report text?",
    options: [
      "A general classification and detailed information",
      "The steps to achieve a goal",
      "The conflict in a story",
      "The writer's point of view",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is an example of a report text?",
    options: [
      "An article about the habits of penguins",
      "A guide to building a bookshelf",
      "A fairy tale",
      "An argumentative essay",
    ],
    correctAnswer: 0,
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
          <button onClick={() => window.location.href = "/Dashboard"}>Kembali ke Menu</button>

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