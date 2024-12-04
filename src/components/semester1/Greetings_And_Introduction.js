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
          "I'm fine, thanks",
          "Not bad",
          "How do you do?",
          "What's Up?"
        ],
        correct: 2
      },
      {
        question: "What should you say when meeting someone for the first time in a formal setting?",
        options: [
          "Nice to meet you",
          "What's up?",
          "See you later ",
          "Hey,buddy!"
        ],
        correct: 1
      },
      {
        question: "What do you usually say when meeting someone for the first time?",
        options: [
          "Nice to meet you",
          "See you tomorrow",
          "Goodbye",
          "You're welcome"
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

  const expositionContent = {
    definition: (
      <>
        <h3 className="card-title">Definition of Greetings and Introduction</h3>
      
        <div className="custom-alert">
          <h5 className="card-title">1.Greetings</h5>
          <ul className="custom-list">
            <li className="list-item">Greeting is an expression or words way to acknowledge or welcomenyari yg  someone. It is typically done at beginning to start a conversation to show respect,attention, or friendliness towards the other person. Greetings can vary depending on the context, such as when meeting friends,teachers,family,or new acquntances </li>

          </ul>
        </div>
        <div className="custom-alert">
          <h5 className="card-title">2.Introduction</h5>
          <ul className="custom-list">
            <li className="list-item">An introduction is a way to present oneself or someone else. It helps establish a connection and create a comfortable atmosphere for communication. An introduction usually includes information like name,origin,occupation,or hobbies, dependeng on the context.</li>

          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Greeting Structure</h3>
        <div className="custom-alert">
          <h5 className="card-title">1.Opening</h5>
          <ul className="custom-list">
         <h4> Formal Greetings (used in professional or polite situations)</h4>
            <li className="list-item">Good morning/afternoon/evening </li>
            <li className="list-item">Hello, how do you do?</li>
            <li className="list-item">Nice to meet you</li>

           <h4>Informal Greetings (used with friends or in casual situations)</h4> 
            <li className="list-item">Hey!</li>
            <li className="list-item">What's up?</li>
            <li className="list-item">How's it going?</li>
          </ul>
        </div>
  
        <h3 className="card-title">Introduction Structure</h3>
        <div className="custom-alert">
        <li className="list-item">1.Opening : Greeting</li>

        <li className="list-item">2.Name  example : my name is (your name)</li>
          <li className="list-item">3. Origin/Residence : im am from(place)</li>
          <li className="list-item">3. Occupation/Status: I work as a (job) / I am a student </li>
          <li className="list-item">3.Closing : It's a pleasure to meet you </li>


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
          <div className="custom-alert">
          <h5 className="card-title">Key Features:</h5>
          <ul className="custom-list">
            <li className="list-item">Primary Auxiliary verbs : Have , Do, Be</li>
            <li className="list-item">Personal Pronoun: Subject pronoun, Object pronoun</li>

          </ul>
        </div> 
       
      
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Examples of Greeting And Introduction</h3>
        
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
        <p className="expo-subtitle">Understanding the structure and usage of the Greetings and Introduction </p>
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
              <h3 className="card-title">Quiz on Greetings And Introduction</h3>
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
