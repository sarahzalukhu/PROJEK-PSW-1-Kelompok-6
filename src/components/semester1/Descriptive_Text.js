import React, { useState } from 'react';
import './Descriptive_Text.css';

function Descriptive_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the purpose of Descriptive text?",
      options: [
        "To explain how something works",
        "To tell a story ",
        "To describe a specific person, place, or thing in detail",
        "To persuade the reader to do something"
      ],
      correct: 3
    },
    {
      question: "Which of the following sentence uses an adjective to describe a place?",
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

  const narrativeContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Descriptive Text</h3>
        <p className="card-text">
        Descriptive text is type of text used to decribe an object,place,person, or thing in detail. The purpose is to give a clear picture to the readers so they can "see" or "feel" what is being described.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To Describe : Provide detailed information about a person,place,object,or event so that the readers can visualize it clearly </li>
            <li className="list-item">To Inform : Educate readers about the characteristic,Features,or uniqueness of the subject being described. </li>
            <li className="list-item">To engage The Audience : Use vivid language and descriptive details to capture the readers' interest and make them feel connected to the subject.</li>
            <li className="list-item">To Promote : In the context of web content,descriptive text can help promote tourist attractions,products,or cultural element to attract visitors or customers. </li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Narrative Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Indetification </h5>
          <ul className="custom-list">
            <li className="list-item">The Introduction of the object being described. Ussualy found in the fist paragraph.</li>
            <li className="list-item">Example : "Borobudur Temple is one of the famous temples in Indonesia.</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Description</h5>
          <ul className="custom-list">
            <li className="list-item">Detailed explanation of the object's characteristic.</li>
            <li className="list-item">This section may include : Physical appearance, function or use , location , unique Features</li>
            <li className="list-item">Example: "The temple is made of gray andesite stone and has intricate carvings on its walls. It consists of nine stacked platforms, topped by a central dome."</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Resolution</h5>
          <ul className="custom-list">
            <li className="list-item">Shows how the problem or conflict is resolved</li>
            <li className="list-item">Often provides a moral or lesson</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Narrative Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Key Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Focus on Specific Subject</li>
            <li className="list-item">Detail Description</li>
            <li className="list-item">Clear and Organized structure</li>
            <li className="list-item"></li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Use of simple present tense</li>
            <li className="list-item">Specific Nouns</li>
            <li className="list-item">Use of Adjectives</li>
            <li className="list-item">Relational Verbs</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Narrative Text</h3>

        <div className="example-box">
          <h5>Tittle : Mount Bromo</h5>
          <p><strong>Identification : </strong> Mount Bromo is a popular tourist destination located in East Java, Indonesia.</p>
          <p><strong>Description:</strong>This volcano stands at 2,329 meters above sea level and is part of the Bromo Tengger Semeru National Park. Mount Bromo is known for its spectacular sunrise views and its vast sea of sand. The crater emita white smoke,creating a mystical atmosphere. Visitors can ride horses or walk to reach the summit and enjoy the breathtaking scenery.</p>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
    {/* Header Section */}
    <div className="narrative-header fade-in">
      <h1 className="narrative-title">Descriptive Text</h1>
      <p className="narrative-subtitle">Understanding and Creating Effective Descriptive Text</p>
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
              <h3 className="card-title">Quiz on Descriptive Text</h3>
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
            {narrativeContent[activeTab]}
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

export default Descriptive_Text;
