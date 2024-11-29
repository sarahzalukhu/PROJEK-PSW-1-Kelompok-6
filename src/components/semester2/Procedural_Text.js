import React, { useState } from 'react';
import './Semester2.css';

function Procedural_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of procedural text?",
      options: [
        "To tell a story",
        "To explain how to do something",
        "To describe a historical event",
        "To express personal feelings"
      ],
      correct: 1
    },
    {
      question: "What is a key characteristic of procedural text?",
      options: [
        "Use of descriptive language",
        "Emotional storytelling",
        "Step-by-step instructions",
        "Complex narrative structure"
      ],
      correct: 2
    },
    {
      question: "Which language feature is most important in procedural texts?",
      options: [
        "Metaphorical language",
        "Chronological sequence of steps",
        "Emotional descriptors",
        "Character development"
      ],
      correct: 1
    },
    {
      question: "What typically comes first in a procedural text?",
      options: [
        "List of outcomes",
        "Materials or ingredients needed",
        "Personal reflection",
        "Conclusion"
      ],
      correct: 1
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

  const proceduralContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Procedural Text</h3>
        <p className="card-text">
          Procedural text is a type of writing that provides clear, step-by-step instructions on how to do something or complete a specific task. Its primary purpose is to guide the reader through a process systematically and precisely.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To provide clear, sequential instructions</li>
            <li className="list-item">To explain how to complete a specific task</li>
            <li className="list-item">To ensure the reader can successfully follow the process</li>
            <li className="list-item">To break down complex tasks into manageable steps</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Procedural Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Goal/Aim</h5>
          <ul className="custom-list">
            <li className="list-item">Clearly states the purpose of the procedure</li>
            <li className="list-item">Provides context for the task</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Materials/Ingredients</h5>
          <ul className="custom-list">
            <li className="list-item">Lists everything needed to complete the task</li>
            <li className="list-item">Helps readers prepare in advance</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Step-by-Step Instructions</h5>
          <ul className="custom-list">
            <li className="list-item">Provides clear, sequential steps</li>
            <li className="list-item">Uses imperative verbs</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Procedural Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Key Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Clear and direct language</li>
            <li className="list-item">Logical sequence of steps</li>
            <li className="list-item">Precise and concise instructions</li>
            <li className="list-item">Focus on practical guidance</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Imperative verbs (e.g., mix, pour, heat)</li>
            <li className="list-item">Numbered or bulleted steps</li>
            <li className="list-item">Technical or specific vocabulary</li>
            <li className="list-item">Time markers and sequence words</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Procedural Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Common Types:</h5>
          <ul className="custom-list">
            <li className="list-item">Recipes</li>
            <li className="list-item">DIY instructions</li>
            <li className="list-item">User manuals</li>
            <li className="list-item">Science experiment protocols</li>
          </ul>
        </div>
        <div className="example-box">
          <h5>Sample Procedural Text: How to Make Pancakes</h5>
          <p><strong>Goal:</strong> Create delicious homemade pancakes</p>
          <p><strong>Materials:</strong>
            - 1 cup flour
            - 2 tbsp sugar
            - 2 tsp baking powder
            - 1 egg
            - 3/4 cup milk
            - 2 tbsp melted butter
          </p>
          <p><strong>Steps:</strong>
            1. Mix dry ingredients in a bowl
            2. Whisk egg, milk, and melted butter in another bowl
            3. Combine wet and dry ingredients
            4. Heat pan and add butter
            5. Pour batter and cook until bubbles form
            6. Flip and cook other side until golden
          </p>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Procedural Text</h1>
        <p className="narrative-subtitle">Understanding Step-by-Step Instructional Writing</p>
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
              <h3 className="card-title">Quiz on Procedural Text</h3>
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
            {proceduralContent[activeTab]}
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

export default Procedural_Text;