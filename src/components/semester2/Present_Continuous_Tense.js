import React, { useState } from 'react';
import './Exposition.css';

function Present_Continuous_Tense() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the primary use of the Present Continuous tense?",
      options: [
        "To describe actions happening in the past",
        "To describe actions happening at the moment of speaking",
        "To talk about future events only",
        "To describe completed actions"
      ],
      correct: 1,
    },
    {
      question: "Which sentence is an example of the Present Continuous tense?",
      options: [
        "She walks to school every day.",
        "She is walking to school right now.",
        "She walked to school yesterday.",
        "She will walk to school tomorrow."
      ],
      correct: 1,
    },
    {
      question: "What is the typical structure of a Present Continuous sentence?",
      options: [
        "Subject + has/have + verb",
        "Subject + is/are/am + verb-ing",
        "Subject + will + verb",
        "Subject + verb-ed"
      ],
      correct: 1,
    },
    {
      question: "Which time expression is commonly used with the Present Continuous tense?",
      options: [
        "Yesterday",
        "At the moment",
        "Every day",
        "Last week"
      ],
      correct: 1,
    },
  ];

  function handleAnswer(index) {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const presentContinuousContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Present Continuous Tense</h3>
        <p className="card-text">
          The Present Continuous tense is a verb tense used to indicate that an action is occurring at the moment of speaking, is temporary, or is happening around the present time. It can also be used to describe planned future activities or changes in progress. The tense is formed by combining the present tense of the verb *to be* (is, am, are) with the present participle (*-ing* form) of the main verb.
        </p>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Present Continuous Tense</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Positive Sentences</h5>
          <p>Structure: Subject + is/am/are + Verb-ing</p>
          <ul>
            <li>Example: *She is studying for her exams.*</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Negative Sentences</h5>
          <p>Structure: Subject + is/am/are + not + Verb-ing</p>
          <ul>
            <li>Example: *They are not watching TV right now.*</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Questions</h5>
          <p>Structure: Is/Am/Are + Subject + Verb-ing?</p>
          <ul>
            <li>Example: *Are you reading this article?*</li>
          </ul>
        </div>
      </>
    ),
    usage: (
      <>
        <h3 className="card-title">Uses of Present Continuous Tense</h3>
        <ul>
          <li><strong>Actions happening right now:</strong> To describe something that is currently taking place. Example: *She is cooking dinner.*</li>
          <li><strong>Temporary situations:</strong> For activities or conditions that are not permanent. Example: *I am staying at my friend's house.*</li>
          <li><strong>Future plans:</strong> To discuss arranged events in the near future. Example: *We are meeting them tomorrow.*</li>
          <li><strong>Repeated actions (with annoyance):</strong> To emphasize irritation or habits. Example: *He is always losing his keys.*</li>
        </ul>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Present Continuous Tense</h3>
        <ul>
          <li>*I am writing an email.*</li>
          <li>*They are playing soccer in the park.*</li>
          <li>*She is not coming to the party tonight.*</li>
          <li>*Are you listening to music?*</li>
          <li>*We are preparing for our exams this week.*</li>
        </ul>
      </>
    ),
  };

  return (
    <div className="present-continuous-container">
      {/* Header Section */}
      <div className="header fade-in">
        <h1 className="title">Present Continuous Tense</h1>
        <p className="subtitle">Master the Tense for Actions Happening Right Now</p>
        <button
          className="nav-button"
          onClick={() => {
            setShowQuiz(!showQuiz);
            if (!showQuiz) {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
            }
          }}
        >
          {showQuiz ? 'Back to Material' : 'Test Your Knowledge'}
        </button>
      </div>

      {showQuiz ? (
        <div className="quiz-container fade-in">
          {!showResult ? (
            <>
              <h3 className="card-title">Quiz on Present Continuous Tense</h3>
              <div className="quiz-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${(currentQuestion + 1) * 100 / questions.length}%` }}
                />
              </div>
              <h4 className="quiz-question">{questions[currentQuestion].question}</h4>
              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="result-container">
              <h3>Quiz Complete!</h3>
              <p>Your score: {score} out of {questions.length}</p>
              <button
                className="nav-button"
                onClick={() => {
                  setShowQuiz(false);
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setScore(0);
                }}
              >
                Return to Study Material
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="tabs">
            {['definition', 'structure', 'usage', 'examples'].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="content-card fade-in">{presentContinuousContent[activeTab]}</div>
        </>
      )}
    </div>
  );
}

export default Present_Continuous_Tense;
