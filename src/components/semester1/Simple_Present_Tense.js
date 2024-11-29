import React, { useState } from 'react';
import './Descriptive_Text.css';


function Simple_Present_Tense() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Which sentence is in the Simple Present Tense?",
      options: [
        "She is reading a book",
        "She reads books every weekend ",
        "She read a book yesterday",
        "She will read a book"
      ],
      correct: 2
    },
    {
        question: "What is the correct form of the sentence? ",
      
        options: [
          "The mountain stands taall and majestic",
          "The boy runs very fast",
          "She is writing a letter",
          "I will visit the park tomorrow"
        ],
        correct: 1
      },
      {
        question: "Which these is commonly used in descriptive text?",
        options: [
          "Past Tense",
          "Future Tense",
          "Present Tense",
          "Present continuous tense"
        ],
        correct: 1
      },
      {
        question: "What are two main parts of the structure of descriptive text?",
        options: [
          "Introduction and Conclusion",
          "To introduce the characters",
          "To present the conflict or problem",
          "To provide a moral lesson"
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
        <h3 className="card-title">Definition of Simple Present Tense</h3>
        <p className="card-text">
         A form of sentence that is used to state facts,habits,or events that occur routinely or repeatedly.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">Expressing habits and routines </li>
            <li className="list-item">Stating general truths or facts</li>
            <li className="list-item">Describing fixed schedules or timetables</li>
            <li className="list-item">Expressing feelings,emotions,or opinions</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Exposition Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Affirmative Sentences</h5>
          <ul className="custom-list">
            <li className="list-item">Subject + Verb(+s/es for third person singular) + Object</li>
            <li className="list-item">Example: I study English every day. </li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2.Negative Sentences</h5>
          <ul className="custom-list">
            <li className="list-item">Subject +Do/Does +Not + Verb(+s/es for third person singular) + Object</li>
            <li className="list-item">Example: I do not like coffee. </li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3.Interrogative Sentences</h5>
          <ul className="custom-list">
            <li className="list-item">Do/Does + Subject + Not + Verb(+s/es for third person singular) + Object?</li>
            <li className="list-item">Example: Do you like coffee?.</li>

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
            <li className="list-item">Use of Ver forms</li>
            <li className="list-item">Use of auxiliary verbs</li>
            <li className="list-item">Adrverbs of Frequency</li>
            <li className="list-item">Time Expressions</li>
            <li className="list-item">Declarative, Interrogative, and Negative structure</li>
          </ul>
        </div>
      
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Simple Presnt Tense</h3>
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
        <h1 className="expo-title">Simple Present Tense</h1>
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
              <h3 className="card-title">Quiz on Simple Present Tense</h3>
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

export default Simple_Present_Tense;
