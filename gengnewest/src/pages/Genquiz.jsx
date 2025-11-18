import React, { useState } from 'react'
import "../pagesstyles/genquiz.css"

const quizQuestions = [
  {
    section: "Skin & Hair Profile",
    questions: [
      {
        id: "skinType",
        question: "What is your skin type?",
        type: "single",
        options: ["Oily", "Dry", "Combination", "Sensitive", "Normal"]
      },
      {
        id: "skinConcerns",
        question: "Do you experience any of the following?",
        type: "multiple",
        options: ["Acne", "Pigmentation", "Wrinkles", "Redness", "None"]
      },
      {
        id: "hairType",
        question: "What is your hair type?",
        type: "single",
        options: ["Straight", "Wavy", "Curly", "Coily"]
      },
      {
        id: "hairConcerns",
        question: "What hair issues do you face?",
        type: "multiple",
        options: ["Hair fall", "Dandruff", "Frizz", "Split ends", "None"]
      }
    ]
  },
  {
    section: "Lifestyle & Environment",
    questions: [
      {
        id: "sleepHours",
        question: "How many hours of sleep do you get on average?",
        type: "single",
        options: ["<5", "5–7", "7–9", ">9"]
      },
      {
        id: "pollutionExposure",
        question: "How often are you exposed to pollution/sunlight?",
        type: "single",
        options: ["Rarely", "Sometimes", "Daily"]
      },
      {
        id: "diet",
        question: "How is your diet?",
        type: "single",
        options: ["Balanced", "High in sugar", "Low in protein", "Vegan"]
      }
    ]
  },
  {
    section: "Genetic Traits (Family History)",
    questions: [
      {
        id: "familyHistory",
        question: "Does anyone in your family have any of the following?",
        type: "multiple",
        options: ["Premature graying", "Sensitive skin", "Hair loss", "Eczema"]
      },
      {
        id: "allergies",
        question: "Do you have any known allergies to natural products?",
        type: "multiple",
        options: ["Herbs", "Oils", "Nuts", "None"]
      }
    ]
  },
  {
    section: "Goals",
    questions: [
      {
        id: "goals",
        question: "What are your top 3 skincare/haircare goals?",
        type: "multiple",
        options: [
          "Brighten skin",
          "Control acne",
          "Stimulate hair growth",
          "Reduce frizz",
          "Improve scalp health",
          "Anti-aging",
          "Relaxation"
        ]
      }
    ]
  }
]

const Genquiz = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [userResponses, setUserResponses] = useState({})

  const handleRadioChange = (questionId, value) => {
    setUserResponses({ ...userResponses, [questionId]: value })
  }

  const handleCheckboxChange = (questionId, value, isChecked) => {
    const currentValues = userResponses[questionId] || []
    if (isChecked) {
      setUserResponses({ ...userResponses, [questionId]: [...currentValues, value] })
    } else {
      setUserResponses({ ...userResponses, [questionId]: currentValues.filter(v => v !== value) })
    }
  }

  const navigatePrev = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
    }
  }

  const navigateNext = () => {
    if (currentSectionIndex < quizQuestions.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
    } else {
      submitQuiz()
    }
  }

  const submitQuiz = () => {
    localStorage.setItem('quizResponses', JSON.stringify(userResponses))
    alert('Quiz submitted successfully! Results saved.')
  }

  const currentSection = quizQuestions[currentSectionIndex]

  return (
    <main>
      <section className="quiz-page">
        <div className="container">
          <div className="quiz-container">
            <div className="quiz-header">
              <h2>Genetic Test for Skincare and Haircare</h2>
              <p>Answer the following questions to get customized product recommendations that suit your needs</p>
            </div>
            
            <div id="quiz-content">
              <div className="quiz-section">
                <h3>{currentSection.section}</h3>
                
                {currentSection.questions.map(question => (
                  <div key={question.id} className="quiz-question">
                    <h3>{question.question}</h3>
                    <div className="options-list">
                      {question.type === 'single' ? (
                        question.options.map(option => (
                          <label key={option} className={`option-item ${userResponses[question.id] === option ? 'selected' : ''}`}>
                            <input type="radio" name={question.id} value={option}
                              checked={userResponses[question.id] === option}
                              onChange={() => handleRadioChange(question.id, option)} />
                            {option}
                          </label>
                        ))
                      ) : (
                        question.options.map(option => (
                          <label key={option} className={`option-item ${userResponses[question.id]?.includes(option) ? 'selected' : ''}`}>
                            <input type="checkbox" name={question.id} value={option}
                              checked={userResponses[question.id]?.includes(option) || false}
                              onChange={(e) => handleCheckboxChange(question.id, option, e.target.checked)} />
                            {option}
                          </label>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="quiz-nav">
              <button id="prev-btn" className="btn btn-secondary" disabled={currentSectionIndex === 0} onClick={navigatePrev}>
                Previous
              </button>
              <div>
                <span id="current-section">{currentSectionIndex + 1}</span> / <span id="total-sections">{quizQuestions.length}</span>
              </div>
              <button id="next-btn" className="btn btn-primary" onClick={navigateNext}>
                {currentSectionIndex === quizQuestions.length - 1 ? 'Submit Results' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Genquiz