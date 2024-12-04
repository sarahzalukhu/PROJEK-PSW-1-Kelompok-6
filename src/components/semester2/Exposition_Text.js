import React, { useState } from 'react';
import './Semester2.css';

function Exposition_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of exposition text?",
      options: [
        "To tell a story",
        "To explain or inform about a topic",
        "To persuade the reader",
        "To express personal emotions"
      ],
      correct: 1
    },
    {
      question: "Which of these is a typical structure in exposition texts?",
      options: [
        "Problem, solution, evaluation",
        "Orientation, complication, resolution",
        "General statement, explanation, clarification",
        "Introduction, body, conclusion"
      ],
      correct: 2
    },
    {
      question: "What is a key characteristic of exposition text?",
      options: [
        "Use of fictional characters",
        "Emotional and personal language",
        "Objective and factual information",
        "Chronological storytelling"
      ],
      correct: 2
    },
    {
      question: "Which language feature is most common in exposition texts?",
      options: [
        "Descriptive adjectives",
        "Action verbs",
        "Technical and specific vocabulary",
        "Dialogue"
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
        <h3 className="card-title">Definition of Exposition Text</h3>
        <p className="card-text">
          Exposition text is a type of writing designed to explain, describe, or inform readers about a specific topic. Its primary goal is to provide clear, factual information and enhance the reader's understanding of a subject.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To provide detailed information about a topic</li>
            <li className="list-item">To explain complex concepts or processes</li>
            <li className="list-item">To educate readers through objective information</li>
            <li className="list-item">To analyze and clarify ideas systematically</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. General Statement</h5>
          <ul className="custom-list">
            <li className="list-item">Introduces the main topic or subject</li>
            <li className="list-item">Provides an overview of what will be explained</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Explanation</h5>
          <ul className="custom-list">
            <li className="list-item">Presents detailed information about the topic</li>
            <li className="list-item">Breaks down complex ideas into understandable parts</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Clarification</h5>
          <ul className="custom-list">
            <li className="list-item">Provides further insights or examples</li>
            <li className="list-item">Ensures complete understanding of the topic</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Key Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Objective and factual presentation</li>
            <li className="list-item">Logical and systematic organization</li>
            <li className="list-item">Clear and precise language</li>
            <li className="list-item">Focus on informing rather than entertaining</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Technical and specific vocabulary</li>
            <li className="list-item">Passive voice and impersonal tone</li>
            <li className="list-item">Cause and effect explanations</li>
            <li className="list-item">Comparative and analytica language</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Common Types:</h5>
          <ul className="custom-list">
            <li className="list-item">Scientific articles and reports</li>
            <li className="list-item">Encyclopedic entries</li>
            <li className="list-item">Textbook explanations</li>
            <li className="list-item">Process descriptions</li>
          </ul>
        </div>
        <div className="example-box">
          <h5>Sample Exposition Text:</h5>
          <p><strong>Title:</strong> Photosynthesis: A Vital Process</p>
          <p><strong>General Statement:</strong> Photosynthesis is a complex biochemical process crucial for life on Earth.</p>
          <p><strong>Explanation:</strong> Plants convert sunlight, water, and carbon dioxide into glucose and oxygen through a series of chemical reactions in their chloroplasts.</p>
          <p><strong>Clarification:</strong> This process not only provides energy for plants but also produces oxygen as a byproduct, essential for most life forms.</p>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
      {/* Header Section */}
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Exposition Text</h1>
        <p className="narrative-subtitle">Understanding and Analyzing Informative Writing</p>
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
              <h3 className="card-title">Quiz on Exposition Text</h3>
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

export default Exposition_Text;
