import React, { useState } from 'react';
import './Recount_Text.css';

function Recount_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the main purpose of a recount text?",
      options: [
        "To describe a process",
        "To entertain the reader with fiction ",
        "To retell past events or experiences",
        " To argue about a specific issue"
      ],
      correct: 2
    },
    {
      question: "What is the correct structure of a recount text?",
      options: [
        "Introduction - Argument - Conclusion",
        "Orientation - Events - Reorientation",
        "Title - Body - Recommendation",
        "Thesis - Evidence - Conclusion"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a characteristic of recount text?",
      options: [
        "Focus on specific people, places, or events",
        "Written in past tense",
        "Contains a sequence of events in chronological order",
        "Uses a lot of arguments and persuasion"
      ],
      correct: 3
    },
    {
      question: "Which sentence is an example of an orientation in a recount text?",
      options: [
        "First, we arrived at the airport and checked in.",
        "The vacation was amazing, and we created unforgettable memories.",
        "Last summer, my family and I went to Bali for a holiday.",
        "After exploring the market, we went back to the hotel to rest.",
      ],
      correct: 2
    },
    {
    question: "Which of these is a language feature commonly used in recount text?",
    options: [
        "Use of modal verbs like should and must",
        "Use of action verbs in the past tense",
        "Use of hypothetical phrases like if I were",
        "Use of persuasive techniques",
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

  const recountContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Recount Text</h3>
        <p className="card-text">
        Recount text is a text which retells events, or experiences in the past.        </p>
        <div className="custom-alert">
          <h5 className="card-title">Key Purposes:</h5>
          <ul className="custom-list">
            <li className="list-item">To Describe : Past events or experiences in detail, presenting them in chronological order. </li>
            <li className="list-item">To Inform : Educate readers about n event or experience, whether it is personal, historical, or factual. It conveys specific details that help the audience learn about the occurrence and its significance. </li>
            <li className="list-item">To engage The Audience : Aim to engage the audience by using vivid language, personal emotions, and relatable stories.</li>
            <li className="list-item">To Promote : Ideas, lessons, or values by highlighting outcomes or moral reflections from the events. </li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Structure of Recount Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">1. Orientation </h5>
          <ul className="custom-list">
            <li className="list-item">Introduces the setting, characters, and context of the event.</li>
            <li className="list-item">Example : "Last summer, my family and I went to Bali for a vacation".</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2. Events</h5>
          <ul className="custom-list">
            <li className="list-item">Describes the series of events in chronological order.
            Focuses on what happened, with details and sometimes personal feelings.</li>
            <li className="list-item">Uses time connectives like first, then, after that, finally, etc.</li>
            <li className="list-item">Example: "On the first day, we visited the famous beaches and took lots of pictures. The next day, we explored the local markets and tried some traditional dishes."</li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">3. Reorientation (conclusion)</h5>
          <ul className="custom-list">
            <li className="list-item">Summarizes the experience or reflects on it.
            Often includes personal comments, lessons learned, or final thoughts.</li>
            <li className="list-item">Often provides a moral or lesson</li>
            <li className="list-item">Example: "It was a wonderful trip that brought us closer as a family, and I’ll always treasure those memories."</li>
          </ul>
        </div>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Characteristics of Recount Text</h3>
        <div className="custom-alert">
          <h5 className="card-title">Key Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Contains a plot</li>
            <li className="list-item">Focus on characters</li>
            <li className="list-item">Entertains the reader </li>
          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">Language Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Use of Descriptive phrases</li>
            <li className="list-item">Specific Nouns</li>
            <li className="list-item">Use of Action verbs</li>
            <li className="list-item">Use of Direct and Indirect speech</li>
          </ul>
        </div>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Recount Text</h3>

        <div className="example-box">
          <h5>Tittle : A day at the beach</h5>
          <p><strong>Orientation : </strong>Last Saturday, my family and I went to the beach for a picnic. The weather was sunny and perfect for a day out.</p>
          <br/>
          <p><strong>Events:</strong>"We arrived at the beach around 10 a.m. and quickly set up our picnic area. My siblings and I played in the water while my parents relaxed under the shade of a big umbrella. 
          We built sandcastles, collected seashells, and took plenty of photos to remember the day."
          "In the afternoon, we had a delicious lunch of sandwiches, fruits, and cold drinks. Afterward, we played volleyball with some other families on the beach. Everyone had a great time laughing and competing.".</p>
          <br/>
          <p><strong>Reorientation (conclusion):</strong> "Finally, as the sun began to set, we packed up and headed home. It was a memorable day, and I hope we can go back to the beach soon."</p>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
      {/* Header Section */}
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Recount Text</h1>
        <p className="narrative-subtitle">Retell past events, experiences, or occurrences</p>
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
          <div className="recount-tabs">
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
            {recountContent[activeTab]}
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
