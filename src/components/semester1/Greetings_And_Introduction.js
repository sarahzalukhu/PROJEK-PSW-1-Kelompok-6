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
      question: "Which of the following is the most approrite formal greeting for a teacher?",
      options: [
        "Hi, what's up? ",
        "Hello,Sir. Good Morning.  ",
        "Hey, how are you?",
        "What's going on?"
      ],
      correct: 2
    },
    {
        question: "How would you respond to the question, 'How do you do?' in a formal context? ",
      
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
        <h3 className="card-title">Definition of Greetings and Introduction</h3>
      
        <div className="custom-alert">
          <h5 className="card-title">1.Greetings</h5>
          <ul className="custom-list">
            <li className="list-item">Greeting is a way to say "hello" or acknowledge someone. It can be used to start a conversation oe show respect </li>

          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2.Introduction</h5>
          <ul className="custom-list">
            <li className="list-item">Introduction is a way to let someone know you are when meeting for the first time</li>

          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Types of Greetings</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Formal Greetings (used in professional or polite situations)</h5>
          <ul className="custom-list">
            <li className="list-item">Good Morning</li>
            <li className="list-item">Good afternoon </li>
            <li className="list-item">Hello, how do you do?</li>
            <li className="list-item">Nice to meet you</li>
         
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2.Informal Greetings (used with friends or in casual situations) </h5>
          <ul className="custom-list">
          <li className="list-item">Hi</li>
          <li className="list-item">Hey</li>
          <li className="list-item">What's up?</li>
          <li className="list-item">How's it going?</li>
          <li className="list-item">How are you doing?</li>
          </ul>
        </div>
        <h3 className="card-title">Types of Introduction</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Formal Introduction (used in professional or polite situations)</h5>
          <ul className="custom-list">
            <li className="list-item">Hello, my name is Angie</li>
            <li className="list-item">Good morning, I'm angie. Nice to meet you</li>
            <li className="list-item">Hello, how do you do?</li>
            <li className="list-item">Nice to meet you</li>
         
          </ul>
        </div>
     
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Greetings and Introduction</h3>
        <div className="custom-alert">

          <ul className="custom-list">
            <li className="list-item">Polite and Respectful Tone</li>
            <li className="list-item">Adaptability</li>
            <li className="list-item">Use of Common phrases</li>
            <li className="list-item">Focus on clarity</li>
            <li className="list-item">Time relevance</li>
          </ul>
        </div>
      
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Simple Presnt Tense</h3>
        
        <div className="example-box">
          <h5>1.Formal Greetings and Introduction</h5>
          <p><strong>Meeting a Teacher</strong></p>
          <p><strong>Teacher:</strong> Good morning, how are you?</p>
          <p><strong>Students:</strong>Good morning,Sir. I'm fine, thank you. How about you?</p>
          <p><strong>Teacher:</strong> I'm doing well,thank you. By the way, what's your name?</p>
          <p><strong>Students:</strong>My name is Clara,Sir. I'm a new student in grade 10.</p>
          <p><strong>Teacher:</strong> Nice to meet you, Clara. Welcome to our school</p>
          <p><strong>Students:</strong>Nice to meet you too,Sir</p>
        </div>
        <div className="example-box">
          <h5>1.Informal Greetings and Introduction</h5>
          <p><strong>Meeting a New Friend</strong></p>
          <p><strong>Yohana:</strong> Hi! What's up?</p>
          <p><strong>Angie:</strong>Hey! Not much. How about you?</p>
          <p><strong>Yohana:</strong>Same here. By the way, I'm Yohana</p>
          <p><strong>Angie:</strong>Nice to meet you,Yohana. I'm Angie</p>
        </div>
      </>
    ),
  };

  return (
    <div className="exposition-container">
      {/* Header Section */}
      <div className="expo-header fade-in">
        <h1 className="expo-title">Greeting and Introduction</h1>
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

export default Informal_Letters;
