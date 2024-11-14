import React, { useState } from 'react';
import './Exposition.css';

function Procedural_Text() {
  const [activeTab, setActiveTab] = useState('definition');
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    // Tambahkan pertanyaan untuk quiz
  ];

  function handleAnswer(index) {
    // Logika untuk menilai jawaban dan update score
  }

  const expositionContent = {
    definition: (
      <>
        <h3 className="card-title">Pengertian Teks Eksposisi</h3>
        <p className="card-text">
          Teks eksposisi adalah jenis teks yang bertujuan untuk menjelaskan atau memaparkan
          suatu pendapat, gagasan, atau keyakinan yang didukung oleh fakta-fakta dan argumen yang kuat.
        </p>
        <div className="custom-alert">
          <h5 className="card-title">Tujuan Teks Eksposisi:</h5>
          <ul className="custom-list">
            <li className="list-item">Memberikan informasi yang jelas kepada pembaca</li>
            <li className="list-item">Menjelaskan suatu proses atau konsep</li>
            <li className="list-item">Mengembangkan sebuah argumen</li>
            <li className="list-item">Meyakinkan pembaca dengan fakta dan data</li>
          </ul>
        </div>
      </>
    ),
    structure: (
      <>
        <h3 className="card-title">Struktur Teks Eksposisi</h3>
        <p className="card-text">
          Struktur teks eksposisi terdiri dari tesis, argumentasi, dan penegasan ulang.
        </p>
      </>
    ),
    characteristics: (
      <>
        <h3 className="card-title">Ciri-ciri Teks Eksposisi</h3>
        <p className="card-text">
          Ciri-ciri teks eksposisi meliputi bahasa yang lugas dan informatif, data yang akurat, dan
          penggunaan kata-kata pendukung argumentasi.
        </p>
      </>
    ),
    examples: (
      <>
        <h3 className="card-title">Contoh Teks Eksposisi</h3>
        <p className="card-text">
          Contoh teks eksposisi bisa berupa artikel ilmiah, esai opini, dan laporan argumentatif.
        </p>
      </>
    ),
  };

  return (
    <div className="exposition-container">
      {/* Header Section */}
      <div className="expo-header fade-in">
        <h1 className="expo-title">Exposition Text</h1>
        <p className="expo-subtitle">Pembelajaran tentang teks eksposisi dalam Bahasa Inggris</p>
        <button 
          className="nav-button"
          onClick={() => setShowQuiz(!showQuiz)}
        >
          {showQuiz ? 'Kembali ke Materi' : 'Mulai Quiz'}
        </button>
      </div>

      {showQuiz ? (
        <div className="quiz-container fade-in">
          <h3 className="card-title">Quiz Pemahaman Materi</h3>
          <div className="quiz-progress">
            <div 
              className="progress-bar"
              style={{width: `${(currentQuestion + 1) * 100 / questions.length}%`}}
            />
          </div>
          <h4 className="quiz-question">{questions[currentQuestion]?.question}</h4>
          <div className="quiz-options">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                className="option-button"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
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
              Sebelumnya
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
              Selanjutnya
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Procedural_Text;
