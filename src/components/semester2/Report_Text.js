import React, { useState } from 'react';

function ReportText() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the main purpose of a report text?",
      options: [
        "To describe a sequence of events",
        "To provide factual information about a topic",
        "To entertain readers with a story",
        "To persuade readers to agree with an argument"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a feature of report texts?",
      options: [
        "Use of general nouns",
        "Detailed facts and data",
        "Imaginative storytelling",
        "Present tense for timeless truths"
      ],
      correct: 2
    },
    {
      question: "What is typically included in the conclusion of a report text?",
      options: [
        "A personal opinion",
        "A summary of findings",
        "A moral lesson",
        "A new argument"
      ],
      correct: 1
    },
    {
      question: "Which language feature is common in report texts?",
      options: [
        "Past tense for events",
        "Persuasive phrases",
        "Technical terms and formal language",
        "First-person point of view"
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

  const reportContent = {
    definition: (
      <>
        <h3>Definition of Report Text</h3>
        <p>
          A report text is a type of informational text that provides factual descriptions of an object, phenomenon, or situation. It is written to inform the reader about the characteristics, classifications, and functions of the topic being described.
        </p>
      </>
    ),
    structure: (
      <>
        <h3>Structure of Report Text</h3>
        <ul>
          <li><strong>General Classification:</strong> Introduces the topic and provides an overview.</li>
          <li><strong>Description:</strong> Explains the topic in detail, including its features, behaviors, and uses.</li>
          <li><strong>Optional Conclusion:</strong> Summarizes the information or highlights key points.</li>
        </ul>
      </>
    ),
    characteristics: (
      <>
        <h3>Characteristics of Report Text</h3>
        <ul>
          <li>Uses general nouns (e.g., "Mammals," "Volcanoes").</li>
          <li>Written in the present tense for universal truths.</li>
          <li>Uses technical terms and formal language.</li>
          <li>Provides factual and objective information.</li>
        </ul>
      </>
    ),
    examples: (
      <>
        <h3>Examples of Report Text</h3>
        <div>
          <p><strong>Topic:</strong> Penguins</p>
          <p><strong>General Classification:</strong> Penguins are aquatic, flightless birds that are highly adapted to life in the water.</p>
          <p><strong>Description:</strong></p>
          <ul>
            <li>They have a streamlined body and strong flippers for swimming.</li>
            <li>Penguins live mostly in the Southern Hemisphere.</li>
            <li>They feed on fish, squid, and other forms of sea life caught while swimming.</li>
          </ul>
        </div>
      </>
    ),
  };

  return (
    <div>
      <h1>Report Text</h1>
      <div>
        <button onClick={() => setActiveTab('definition')}>Definition</button>
        <button onClick={() => setActiveTab('structure')}>Structure</button>
        <button onClick={() => setActiveTab('characteristics')}>Characteristics</button>
        <button onClick={() => setActiveTab('examples')}>Examples</button>
        <button onClick={() => setShowQuiz(!showQuiz)}>{showQuiz ? 'Close Quiz' : 'Take Quiz'}</button>
      </div>
      <div>
        {showQuiz ? (
          showResult ? (
            <div>
              <h3>Your Score: {score}/{questions.length}</h3>
              <button onClick={() => {
                setShowQuiz(false);
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
              }}>Restart</button>
            </div>
          ) : (
            <div>
              <h3>{questions[currentQuestion].question}</h3>
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)}>{option}</button>
              ))}
            </div>
          )
        ) : (
          reportContent[activeTab]
        )}
      </div>
    </div>
  );
}

export default ReportText;
