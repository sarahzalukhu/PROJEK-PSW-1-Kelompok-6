import React, { useState } from 'react';
import './Semester2.css';

function Report_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of report text?",
      options: [
        "To tell a story",
        "To present factual information about a topic",
        "To persuade the reader",
        "To express personal emotions"
      ],
      correct: 1
    },
    {
      question: "Which of these is a typical structure of report text?",
      options: [
        "Orientation, complication, resolution",
        "General classification, description",
        "Thesis, arguments, conclusion",
        "Introduction, methods, results"
      ],
      correct: 1
    },
    {
      question: "What language feature is commonly used in report texts?",
      options: [
        "Narrative past tense",
        "Descriptive metaphors",
        "Technical and objective language",
        "Emotional expressions"
      ],
      correct: 2
    },
    {
      question: "Which field typically uses report texts?",
      options: [
        "Creative writing",
        "Personal journaling",
        "Scientific and academic research",
        "Entertainment media"
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

  const reportContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Report Text</h3>
        <p className="card-text">
          A report text is a type of informative writing that systematically describes and explains a specific topic, phenomenon, or subject. Its primary purpose is to provide factual, objective information to inform and educate readers.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To provide comprehensive information about a specific topic</li>
            <li className="list-item">To describe natural, social, or scientific phenomena</li>
            <li className="list-item">To present factual and objective information</li>
            <li className="list-item">To analyze and explain complex subjects</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Report Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. General Classification</h5>
          <ul className="custom-list">
            <li className="list-item">Introduces the topic or subject being discussed</li>
            <li className="list-item">Provides a broad overview of the subject</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Description</h5>
          <ul className="custom-list">
            <li className="list-item">Offers detailed information about specific aspects of the topic</li>
            <li className="list-item">Breaks down characteristics, functions, or behaviors</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Report Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Key Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Objective and factual presentation</li>
            <li className="list-item">Logical and systematic organization</li>
            <li className="list-item">Focus on information and analysis</li>
            <li className="list-item">Use of technical or specialized vocabulary</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Present tense</li>
            <li className="list-item">Technical and precise language</li>
            <li className="list-item">Formal tone</li>
            <li className="list-item">Objective and impersonal style</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Report Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Common Types:</h5>
          <ul className="custom-list">
            <li className="list-item">Scientific research papers</li>
            <li className="list-item">Wildlife and nature documentations</li>
            <li className="list-item">Technical manuals</li>
            <li className="list-item">Environmental impact reports</li>
          </ul>
        </div>
        <div className="example-box">
          <h5>Sample Report Text:</h5>
          <p><strong>Title:</strong> The Honeybee Ecosystem</p>
          <p><strong>General Classification:</strong> Honeybees are critical pollinators in global ecosystems, belonging to the Apidae family.</p>
          <p><strong>Description:</strong> These insects live in complex social structures with distinct roles. Worker bees collect nectar, maintain the hive, and protect the colony. Queens are responsible for reproduction, while drones mate with queens from other colonies.</p>
        </div>
      </>
    ),
  };

  // Rest of the component remains the same as the Narrative Text component
  return (
    <div className="narrative-container">
      {/* Header Section */}
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Report Text</h1>
        <p className="narrative-subtitle">Understanding and Writing Informative Reports</p>
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
              <h3 className="card-title">Quiz on Report Text</h3>
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
            {reportContent[activeTab]}
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

export default Report_Text;