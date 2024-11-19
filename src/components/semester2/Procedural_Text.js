import React, { useState } from 'react';

function ProceduralText() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the primary purpose of a procedural text?",
      options: [
        "To entertain readers with a story",
        "To provide instructions or steps to achieve a goal",
        "To argue a point of view with supporting evidence",
        "To describe a person or place in detail"
      ],
      correct: 1
    },
    {
      question: "Which of the following is a key feature of procedural texts?",
      options: [
        "Use of persuasive language",
        "Step-by-step instructions",
        "Abstract and figurative language",
        "Narrative elements with characters"
      ],
      correct: 1
    },
    {
      question: "What typically follows the title in a procedural text?",
      options: [
        "The conclusion",
        "The thesis statement",
        "The list of required materials",
        "The steps in random order"
      ],
      correct: 2
    },
    {
      question: "Which verb form is predominantly used in procedural texts?",
      options: [
        "Past tense",
        "Future tense",
        "Imperative form",
        "Present continuous tense"
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

  const proceduralContent = {
    definition: (
      <>
        <h3>Definition of Procedural Text</h3>
        <p>
          A procedural text provides step-by-step instructions or directions to accomplish a task or achieve a goal. The focus is on clarity and logical sequencing.
        </p>
      </>
    ),
    structure: (
      <>
        <h3>Structure of Procedural Text</h3>
        <ul>
          <li><strong>Title:</strong> Clearly states the purpose.</li>
          <li><strong>Materials:</strong> Lists required tools or ingredients.</li>
          <li><strong>Steps:</strong> Provides sequential instructions.</li>
          <li><strong>Conclusion:</strong> (Optional) Summarizes the result.</li>
        </ul>
      </>
    ),
    examples: (
      <>
        <h3>Examples of Procedural Text</h3>
        <p><strong>Example:</strong> How to Bake a Cake</p>
        <ol>
          <li>Preheat the oven.</li>
          <li>Mix the ingredients.</li>
          <li>Pour into a baking tin.</li>
          <li>Bake for 30 minutes.</li>
        </ol>
      </>
    )
  };

  return (
    <div>
      <h1>Procedural Text</h1>
      <div>
        <button onClick={() => setActiveTab('definition')}>Definition</button>
        <button onClick={() => setActiveTab('structure')}>Structure</button>
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
          proceduralContent[activeTab]
        )}
      </div>
    </div>
  );
}

export default ProceduralText;
