import React, { useState } from 'react';
import './Semester2.css';

function Present_Continuous_Tense() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the formula for Present Continuous Tense?",
      options: [
        "Subject + Verb (base form)",
        "Subject + am/is/are + Verb + -ing",
        "Subject + will + Verb",
        "Subject + has/have + Verb"
      ],
      correct: 1
    },
    {
      question: "When do we typically use Present Continuous Tense?",
      options: [
        "For permanent situations",
        "For completed actions",
        "For actions happening now or planned future actions",
        "For general truths"
      ],
      correct: 2
    },
    {
      question: "Which is correct in Present Continuous Tense?",
      options: [
        "I am play football",
        "I am playing football",
        "I play football",
        "I am plays football"
      ],
      correct: 1
    },
    {
      question: "What auxiliary verb is used with 'I'?",
      options: [
        "is",
        "are",
        "am",
        "will"
      ],
      correct: 2
    }
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

  const presentContinuousTenseContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Present Continuous Tense</h3>
        <p className="card-text">
          Present Continuous Tense describes actions that are happening right now or planned for the near future. It is formed using the auxiliary verb 'to be' (am/is/are) and the main verb + -ing.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Uses:</h5>
          <ul className="custom-list">
            <li className="list-item">Describing current actions</li>
            <li className="list-item">Talking about temporary situations</li>
            <li className="list-item">Discussing planned future actions</li>
            <li className="list-item">Expressing changing or developing situations</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Present Continuous Tense</h3>
        <div className="custom-alert">
          <h5 className="card-title">Basic Formula</h5>
          <ul className="custom-list">
            <li className="list-item">Subject + am/is/are + Verb + -ing</li>
            <li className="list-item">Use 'am' with I, 'is' with he/she/it, 'are' with you/we/they</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Verb Spelling Rules</h5>
          <ul className="custom-list">
            <li className="list-item">Most verbs: add -ing (play → playing)</li>
            <li className="list-item">Verbs ending in 'e': remove 'e' and add -ing (write → writing)</li>
            <li className="list-item">Verbs with short vowel + consonant: double last consonant (sit → sitting)</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Present Continuous Tense</h3>
        <div className="custom-alert">
          <h5 className="card-title">Key Characteristics:</h5>
          <ul className="custom-list">
            <li className="list-item">Shows ongoing or temporary actions</li>
            <li className="list-item">Indicates actions happening right now</li>
            <li className="list-item">Expresses future planned activities</li>
            <li className="list-item">Cannot be used with stative verbs</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Signal Words:</h5>
          <ul className="custom-list">
            <li className="list-item">now</li>
            <li className="list-item">at the moment</li>
            <li className="list-item">currently</li>
            <li className="list-item">this week/month</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Present Continuous Tense</h3>
        <div className="example-box">
          <h5>Positive Sentences:</h5>
          <ul className="custom-list">
            <li className="list-item">I am studying English. (current action)</li>
            <li className="list-item">She is cooking dinner. (happening now)</li>
            <li className="list-item">They are planning a trip. (future plan)</li>
          </ul>

          <h5>Negative Sentences:</h5>
          <ul className="custom-list">
            <li className="list-item">I am not watching TV. (current denial)</li>
            <li className="list-item">He is not working today. (temporary situation)</li>
          </ul>

          <h5>Question Sentences:</h5>
          <ul className="custom-list">
            <li className="list-item">Are you reading a book? (present inquiry)</li>
            <li className="list-item">Is she coming to the party? (future plan)</li>
          </ul>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Present Continuous Tense</h1>
        <p className="narrative-subtitle">Understanding Ongoing and Future Actions</p>
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
                  style={{width: `${(currentQuestion + 1) * 100 / questions.length}%`}}
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
          <div className="narrative-tabs">
            {['definition', 'structure', 'characteristics', 'examples'].map((tab) => (
              <button 
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="content-card fade-in">
            {presentContinuousTenseContent[activeTab]}
          </div>

          <div className="nav-buttons">
            <button 
              className="nav-button"
              onClick={() => {
                const tabs = ['definition', 'structure', 'characteristics', 'examples'];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex > 0) {
                  setActiveTab(tabs[currentIndex - 1]);
                }
              }}
              disabled={activeTab === 'definition'}
            >
              Previous
            </button>
            <button 
              className="nav-button"
              onClick={() => {
                const tabs = ['definition', 'structure', 'characteristics', 'examples'];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex < tabs.length - 1) {
                  setActiveTab(tabs[currentIndex + 1]);
                }
              }}
              disabled={activeTab === 'examples'}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Present_Continuous_Tense;
