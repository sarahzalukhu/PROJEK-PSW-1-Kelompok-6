import React, { useState } from 'react';
import './Descriptive_Text.css';


function Informal_Letters() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the main purpose of an Informal letter?",
      options: [
        "To communicate with a government official",
        "To share personal updates or emotions with friends or  family",
        "To apply for a job",
        "To request formal permission"
      ],
      correct: 1
    },
    {
      question: "Which of the following is an example of casual salutation in an informal letter?",
      options: [
        "Dear sir/madam",
        "To whom it may concern",
        "Hi [name]",
        "Reapectfully"
      ],
      correct: 1
    },
    {
      question: "What is typically found in the conclusion of an exposition text?",
      options: [
        "A new argument",
        "A plot twist",
        "Restatement of the main thesis",
        "A personal story"
      ],
      correct: 2
    },
    {
      question: "Which language feature is commonly used in exposition texts?",
      options: [
        "Metaphors and similes",
        "Casual language and slang",
        "Technical terms and formal language",
        "Rhyming words"
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
        <h3 className="card-title">Definition of Informal Letters</h3>
        <p className="card-text">
          An informal letter is a type of letter written for personal purposes.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To share personal information or updates </li>
            <li className="list-item">To maintain a relationship</li>
            <li className="list-item">To express emotions or fellings</li>
            <li className="list-item">To invite or plan a meeting</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Address</h5>
          <ul className="custom-list">
            <li className="list-item">placed at the top right corner of the latter</li>
            <li className="list-item">include the date of writing</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2.Salutation(greeting)</h5>
          <ul className="custom-list">
            <li className="list-item">used to greet the recipient</li>
            
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Body of letter</h5>
          <ul className="custom-list">
            <li className="list-item">Opening paragraph: Includes an initial greeting or the reason for writing</li>
            <li className="list-item">Main Paragraph: Contains the main message or information you want to convey.</li>
            <li className="list-item">Closing Paragraph: Includes wishes,expressions of hope,or plans to meet.</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">4.Closing</h5>
          <ul className="custom-list">
            <li className="list-item">used to end the letter politely and warmly</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">5.Signature</h5>
          <ul className="custom-list">
            <li className="list-item">Write your name below the closing.</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Use of Personal Pronouns</li>
            <li className="list-item">Present tense for timeless facts</li>
            <li className="list-item">Logical connectives (furthermore, however, therefore)</li>
            <li className="list-item">Objective tone and factual information</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Content Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Clear and focused arguments</li>
            <li className="list-item">Statistical data and research evidence</li>
            <li className="list-item">Expert opinions and citations</li>
            <li className="list-item">Relevant examples and case studies</li>
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
            <li className="list-item">Academic essays and research papers</li>
            <li className="list-item">Editorial articles and opinion pieces</li>
            <li className="list-item">Scientific journals and reports</li>
            <li className="list-item">Policy documents and proposals</li>
          </ul>
        </div>
        <div className="example-box">
          <h5>Sample Structure:</h5>
          <p><strong>Topic:</strong> The Importance of Reading</p>
          <p><strong>Thesis:</strong> Regular reading is crucial for cognitive development and academic success.</p>
          <p><strong>Arguments:</strong></p>
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
        <h1 className="expo-title">Informal Letters</h1>
        <p className="expo-subtitle">Understanding and Creating Effective Informal Letters</p>
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
              <h3 className="card-title">Quiz on Informal Letters</h3>
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

export default Informal_Letters;
