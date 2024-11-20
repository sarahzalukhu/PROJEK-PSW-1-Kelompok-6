import React, { useState } from 'react';
import './Exposition.css';


function Exposition_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the main purpose of an exposition text?",
      options: [
        "To tell a story with characters",
        "To present an argument with supporting evidence",
        "To describe a place or person",
        "To provide step-by-step instructions"
      ],
      correct: 1
    },
    {
      question: "Which of these is NOT a characteristic of exposition text?",
      options: [
        "Use of facts and data",
        "Fictional narrative elements",
        "Logical arguments",
        "Supporting evidence"
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
        <h3 className="card-title">Definition of Exposition Text</h3>
        <p className="card-text">
          An exposition text is a piece of writing that presents a logical argument or explains a topic with the purpose of informing or persuading the reader. It is based on facts, evidence, and logical reasoning rather than personal feelings or imagination.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To present and defend an argument</li>
            <li className="list-item">To analyze and explain complex topics</li>
            <li className="list-item">To persuade readers using evidence</li>
            <li className="list-item">To inform about specific subjects</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Introduction (Thesis)</h5>
          <ul className="custom-list">
            <li className="list-item">States the main idea or position</li>
            <li className="list-item">Previews the arguments to be discussed</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Body (Arguments)</h5>
          <ul className="custom-list">
            <li className="list-item">Each paragraph presents one main point</li>
            <li className="list-item">Includes supporting evidence and examples</li>
            <li className="list-item">Uses linking words for coherence</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Conclusion</h5>
          <ul className="custom-list">
            <li className="list-item">Restates the thesis</li>
            <li className="list-item">Summarizes main arguments</li>
            <li className="list-item">Provides final thoughts or recommendations</li>
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
            <li className="list-item">Use of formal language and technical terms</li>
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
        <h1 className="expo-title">Exposition Text</h1>
        <p className="expo-subtitle">Understanding and Creating Effective Exposition Texts</p>
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

export default Exposition_Text;
