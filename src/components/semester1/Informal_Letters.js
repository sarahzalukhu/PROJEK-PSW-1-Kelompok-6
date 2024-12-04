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
      question: "What is usually Not included in an informal letter?",
      options: [
        "Address of the writer",
        "Data",
        "Subject line",
        "Personal stories or experiences"
      ],
      correct: 2
    },
    {
      question: "What is the main characteristic of an informal letter?",
      options: [
        "It uses formal languagge",
        "It is addressed to an organization.",
        "It has a casual tone and personal content",
        "It must follow strict rules"
      ],
      correct: 3
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
        <h3 className="card-title">Characteristics of Informal letter</h3>
        <div className="custom-alert">

          <ul className="custom-list">
          <li className="list-item">Casual Tone : The language is relaxed and friendly, as if speaking to the recipient directly</li>
            <li className="list-item">Personal content : The letter discusses personal topics such as family,friends, experiences, or emotions.</li>
            <li className="list-item">No need for full address or date: Including the address and date is optional and not as formal as in a formal letter.</li>
            <li className="list-item">Expressive and emotional: Often includes emotions, humor , or a personal touch to strengthen the connection </li>
            <li className="list-item">Purpose-Oriented: The letter usually has a clear purpose, such as aharing news, inviting, apologising, or simply staying in touch.</li>
          </ul>
        </div>

      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Informal Text</h3>
  
        <div className="example-box">
         
          <p><strong>Tarutung</strong></p>
          <p><strong>Tapanuli Utara</strong> </p>
          <p><strong>11 November 2023</strong></p>
      
          <ul>
          <p><strong>Dear sarah</strong></p>
         <p>Hi! How are you? I hope this letter finds you well. It's been such a long time since we last met, and i really miss hanging out with you.</p>
          <p>I wanted to tell you about my trip to Bali last month. It wa amazing! The beaches were so beautiful,and the sunsets were breathtaking. I also tried surfing for the first time. Can you believe it? At first, I kept falling, but after a few tries, I finally stood up on the board. 
            It was such a thrilling experience! 
          </p>
          <p>How have you been? What's new with you? Let me know if you're free next weekend.
            Maybe we can grab coffee and catch up.
          </p>
          <p>Take care,and i hope to hear from you soon!</p>
          </ul>
          <p><strong>Love , Gladys</strong> </p>
        </div>
      </>
    ),
  };

  return (
    <div className="narrative-container">
      {/* Header Section */}
      <div className="narrative-header fade-in">
        <h1 className="narrative-title">Informal Letters</h1>
        <p className="narrative-subtitle">Understanding and Creating Effective Informal Letters</p>
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

export default Informal_Letters;
