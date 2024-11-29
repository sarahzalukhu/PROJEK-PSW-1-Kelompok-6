import React, { useState } from "react";
import "./Quiz.css";

const quizQuestions = [
  {
    question: "What is the proper response to Nice to meet you?",
    options: [
      "See you later.",
      "Nice to meet you too.",
      "I'm fine, thank you.",
      "Goodbye.",
    ],
    correct: 1
  },
  {
    question: "Which of the following expressions is suitable for introducing yourself?",
    options: [
      "How are you?",
      "I'm sorry, I don't know you.",
      "Hello, my name is Anna.",
      "See you later.",
    ],
    correct: 2
  },
  {
    question: "When meeting someone for the first time, you might say:",
    options: [
      "Long time no see!",
      "Good to see you again!",
      "Hi, my name is Mike.",
      "What are you doing here?",
    ],
    correct: 2
  },
  {
    question: "Which is NOT a greeting?",
    options: [
      "Good morning.",
      "How are you?",
      "What's your name?",
      "Goodbye.",
    ],
    correct: 3
  },
  {
    question: "In a formal setting, how should you greet someone?",
    options: [
      "Yo, what's up?",
      "Hey there!",
      "Good afternoon, nice to meet you.",
      "Later, dude.",
    ],
    correct: 2
  },
  {
    question: "What is the main purpose of a recount text?",
    options: [
      "To persuade someone.",
      "To entertain the readers.",
      "To tell past events.",
      "To describe something.",
    ],
    correct: 2
  },
  {
    question: "What tense is commonly used in recount texts?",
    options: [
      "Present tense.",
      "Past tense.",
      "Future tense.",
      "Present continuous tense.",
    ],
    correct: 1
  },
  {
    question: "Which of the following is a generic structure of a recount text?",
    options: [
      "Orientation, complication, resolution.",
      "Orientation, events, re-orientation.",
      "Identification, description.",
      "Thesis, arguments, conclusion.",
    ],
    correct: 1
  },
  {
    question: "Identify the example of a recount text title:",
    options: [
      "My Best Friend",
      "The Story of My Holiday",
      "How to Bake a Cake",
      "The Wonders of Nature",
    ],
    correct: 1
  },
  {
    question: "Which sentence is likely found in a recount text?",
    options: [
      "The cake is very delicious.",
      "First, boil the water.",
      "Last month, I visited Bali.",
      "Do you like playing soccer?",
    ],
    correct: 2
  },
  {
    question: "What is the main purpose of a descriptive text?",
    options: [
      "To entertain the readers.",
      "To describe a person, place, or thing.",
      "To explain how to do something.",
      "To tell a story.",
    ],
    correct: 1
  },
  {
    question: "Which is an example of a descriptive text title?",
    options: [
      "How I Spent My Holiday",
      "The Beauty of Mount Bromo",
      "My Future Plan",
      "How to Make a Paper Boat",
    ],
    correct: 1
  },
  {
    question: "What tense is commonly used in descriptive text?",
    options: [
      "Present tense.",
      "Past tense.",
      "Future tense.",
      "Past perfect tense.",
    ],
    correct: 0
  },
  {
    question: "Identify the descriptive sentence:",
    options: [
      "He went to the park yesterday.",
      "She is tall and has long black hair.",
      "They will meet us tomorrow.",
      "Can you help me?",
    ],
    correct: 1
  },
  {
    question: "The following is NOT a characteristic of a descriptive text:",
    options: [
      "Contains detailed information.",
      "Uses adjectives.",
      "Describes events in sequence.",
      "Focuses on one subject.",
    ],
    correct: 2
  },
  {
    question: "Which sentence is in the simple present tense?",
    options: [
      "She writes a letter every day.",
      "He wrote a letter yesterday.",
      "They are writing a letter now.",
      "I will write a letter tomorrow.",
    ],
    correct: 0
  },
  {
    question: "What is the correct form of the verb for She ___ (go) to school every day?",
    options: [
      "goes",
      "go",
      "went",
      "going",
    ],
    correct: 0
  },
  {
    question: "Which sentence is incorrect?",
    options: [
      "He walks to the park every morning.",
      "They don't like spicy food.",
      "She do her homework every night.",
      "I always wake up early.",
    ],
    correct: 2
  },
  {
    question: "Choose the negative form: He speaks English fluently.",
    options: [
      "He doesn't speak English fluently.",
      "He don't speak English fluently.",
      "He didn't speak English fluently.",
      "He isn't speak English fluently",
    ],
    correct: 0
  },
  {
    question: "Simple present tense is used to express:",
    options: [
      "Past actions.",
      "Future plans.",
      "Daily habits.",
      "Actions happening now.",
    ],
    correct: 2
  },
  {
    question: "What is the main difference between formal and informal letters?",
    options: [
      "Informal letters have no greetings.",
      "Informal letters use casual language.",
      "Informal letters are used for business.",
      "Informal letters are very short.",
    ],
    correct: 1
  },
  {
    question: "Which phrase is suitable for an informal letter?",
    options: [
      "I am writing to inform you...",
      "Best regards,",
      "Hi, how have you been?",
      "Sincerely yours,",
    ],
    correct: 2
  },
  {
    question: "What is the purpose of an informal letter?",
    options: [
      "To apply for a job.",
      "To communicate with friends or family.",
      "To report an incident.",
      "To complain about a product.",
    ],
    correct: 1
  },
  {
    question: "Which part is NOT typically found in an informal letter?",
    options: [
      "Greetings.",
      "Salutation.",
      "Thesis statement.",
      "Closing.",
    ],
    correct: 2
  },
  {
    question: "Identify the correct closing for an informal letter:",
    options: [
      "Yours faithfully,",
      "With warm wishes,",
      "Best regards,",
      "Sincerely,",
    ],
    correct: 1
  },
];

export default function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === quizQuestions[currentQuestion].correct;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = selectedIndex;
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
          <p>
            Skor Anda: {score} / {quizQuestions.length}
          </p>
          <h3>Kunci Jawaban:</h3>
          <ul className="answers-list">
            {quizQuestions.map((question, index) => (
              <li key={index} className="answer-item">
                <strong>
                  {index + 1}. {question.question}
                </strong>
                <p>
                  Jawaban Benar:{" "}
                  <span className="correct-answer">{question.options[question.correct]}</span>
                </p>
                <p>
                  Jawaban Anda:{" "}
                  <span
                    className={
                      selectedAnswers[index] === question.correct
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
                className={`number ${currentQuestion === index ? "active" : ""}`}
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
                    selectedAnswers[currentQuestion] !== undefined &&
                    index === quizQuestions[currentQuestion].correct
                      ? "correct"
                      : selectedAnswers[currentQuestion] === index
                      ? "incorrect"
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
              {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}