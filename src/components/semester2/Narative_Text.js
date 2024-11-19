import React, { useState } from 'react';
import './Exposition.css'

function Narrative_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of narrative text?",
      options: [
        "To argue a point with evidence",
        "To entertain by telling a story",
        "To describe a process step by step",
        "To analyze a complex topic"
      ],
      correct: 1
    },
    {
      question: "What is a common structure in narrative texts?",
      options: [
        "Introduction, body, conclusion",
        "Orientation, complication, resolution",
        "Thesis, arguments, conclusion",
        "Abstract, methodology, results"
      ],
      correct: 1
    },
    {
      question: "Which of these is a key characteristic of narrative text?",
      options: [
        "Use of logical arguments and data",
        "Focus on storytelling elements like characters and plot",
        "Formal tone and technical terms",
        "Objective presentation of information"
      ],
      correct: 1
    },
    {
      question: "What is the role of the complication in a narrative text?",
      options: [
        "To summarize the story",
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
        <h3 className="card-title">Definition of Narrative Text</h3>
        <p className="card-text">
          A narrative text is a type of writing that tells a story. It involves the use of characters, a plot, a setting, and a clear sequence of events to engage and entertain the reader. The primary purpose of narrative text is to entertain, but it can also inform or teach moral lessons.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To entertain and engage the audience through storytelling</li>
            <li className="list-item">To convey a message or moral through the story</li>
            <li className="list-item">To reflect cultural values and traditions</li>
            <li className="list-item">To inspire imagination and creativity</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Narrative Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Orientation</h5>
          <ul className="custom-list">
            <li className="list-item">Introduces the characters, setting, and background of the story</li>
            <li className="list-item">Provides the context needed to understand the events that follow</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Complication</h5>
          <ul className="custom-list">
            <li className="list-item">Presents a problem, conflict, or challenge faced by the characters</li>
            <li className="list-item">Builds tension and keeps the audience engaged</li>
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
            <li className="list-item">Chronological sequence of events</li>
            <li className="list-item">Focus on characters and their development</li>
            <li className="list-item">Use of descriptive language to create imagery</li>
            <li className="list-item">Dialogue to bring characters to life</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Use of past tense</li>
            <li className="list-item">Action verbs to depict events</li>
            <li className="list-item">Direct and indirect speech</li>
            <li className="list-item">Descriptive adjectives and adverbs</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Narrative Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Common Types:</h5>
          <ul className="custom-list">
            <li className="list-item">Fairy tales (e.g., *Cinderella*, *Snow White*)</li>
            <li className="list-item">Fables (e.g., *The Tortoise and the Hare*)</li>
            <li className="list-item">Myths and legends (e.g., *The Odyssey*, *King Arthur*)</li>
            <li className="list-item">Short stories and novels</li>
          </ul>
        </div>
        <div className="example-box">
          <h5>Sample Narrative:</h5>
          <p><strong>Title:</strong> The Brave Little Rabbit</p>
          <p><strong>Orientation:</strong> Once upon a time, in a dense forest, there lived a little rabbit named Ruby.</p>
          <p><strong>Complication:</strong> One day, Ruby encountered a fierce wolf that threatened her family. She needed to outsmart him.</p>
          <p><strong>Resolution:</strong> Using her wit, Ruby tricked the wolf into falling into a deep pit, saving her family and becoming the hero of the forest.</p>
          <p><strong>Moral:</strong> Courage and intelligence can overcome even the greatest challenges.</p>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
      {/* Header Section */}
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Narrative Text</h1>
        <p className="narrative-subtitle">Understanding and Writing Compelling Narratives</p>
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
              <h3 className="card-title">Quiz on Narrative Text</h3>
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

export default Narrative_Text;
