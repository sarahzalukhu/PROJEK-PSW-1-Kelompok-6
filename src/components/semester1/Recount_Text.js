import React, { useState } from 'react';
import './Descriptive_Text.css';


function Recount_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the main purpose of a recount text?"
      ,
      options: [
        "To explain how something works",
        "To tell about an event or experience in the past ",
        "To describe a place or person in detail",
        "To give instructions on how to do something"
      ],
      correct: 2
    },
    {
        question: "Which of the following is not a feature of a recount text?" ,
      
        options: [
          "written in the past tense",
          "uses time connectors",
          "describes a process or set of instructions",
          "tells a personal experience or event"
        ],
        correct: 3
      },
      {
        question: "In which part of a recount text would you typically find the reorientation?",
        options: [
          "In the middle of the text",
          "At the beggining of the text",
          "At the end of the text ",
          "It is not included in a recount text"
        ],
        correct: 3
      },
      {
        question: "Which is the correct sequence for writing a recount text?",
        options: [
          "Reorientation-> Orientation -> Events",
          "Orientation -> Events-> Reorientation ",
          "Events-> Orientation-> Reorientation ",
          "Events-> Reorientation-> Orientation ",
     
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

  const expositionContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Recount Text</h3>
        <p className="card-text">
         A Recount Text is a type of text that retells or describes events,experiences,or activities that happened in the past.The main purpose of this text is to inform or entertain the reader by telling a story or recounting an event that occurred.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To inform or entertain by telling past events </li>
            <li className="list-item">To share personal experience or historical events</li>
            <li className="list-item">To describe what happened in a particular situation in chronological order</li>

          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Orientation </h5>
          <ul className="custom-list">
            <li className="list-item">This section the background information, answering questions.</li>
            <li className="list-item">Example: who was involved? </li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2.Events</h5>
          <ul className="custom-list">
            <li className="list-item">The sequence of events in chronological order.This part describes the key events that took place</li>
            <li className="list-item">Often told in the past tense </li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3.Reorientation </h5>
          <ul className="custom-list">
            <li className="list-item">This section reflects on the events and may provide a conclusion or personal comment.</li>
            <li className="list-item">Not always present in every recount text</li>

          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Simple Present Tense</h3>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Use of Past Tense</li>
            <li className="list-item">Use of Action verbs</li>
            <li className="list-item">Time connectives</li>
            <li className="list-item">Use of adjectives</li>
            <li className="list-item">Personal pronouns</li>
          </ul>
        </div>
      
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Recount</h3>
  
        <div className="example-box">
          <h5>Sample Structure:</h5>
          <p><strong>Tittle:</strong> My Trip to Bali</p>
          <p><strong>Orientation: </strong>Last summer, I went on a vacation to Bali with my family. We stayed there for a week and had an amazing time. We visited many beautiful beaches and explored the cultural sites</p>
          <p><strong>Events:</strong>On the firts day,we arrived at Ngurah Rai International Airport and took a taxi to our hotel. The weather was hot and sunny, perfect for a beach holiday. In the afternoon,we went to Kuta Beach. We swam in the sea,built sandcastles,and enjoyed the sunset. 
          On the second day,we visited the Sacred Monkey Forest in Ubud. The monkeys were very playful,and we took lots of pictures. Later, we tried traditional Balinese food, whichwas delicious.
          
          </p>
          <ul>
            <li>Improves vocabulary and language skills</li>
            <li>Enhances critical thinking abilities</li>
            <li>Builds knowledge and understanding</li>
          </ul>
          <p><strong>Conclusion:</strong> Reading should be encouraged and prioritized in education.</p>
        </div>
      </>
    ),
  };

  return (
    <div className="exposition-container">
      {/* Header Section */}
      <div className="expo-header fade-in">
        <h1 className="expo-title">Recount Text</h1>
        <p className="expo-subtitle">Understanding the structure and usage of the Simple Present Tense </p>
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
              <h3 className="card-title">Quiz on Recount Text</h3>
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
          <div className="expo-tabs">
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
            {expositionContent[activeTab]}
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

export default Recount_Text;