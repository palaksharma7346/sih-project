import React, { useState } from "react";
import "./CareerQuiz.css";

export default function CareerQuiz({ careers }) {
  const questions = [
    {
      id: 1,
      question: "Which activity do you enjoy the most?",
      options: [
        { text: "Coding a new app", category: "Tech", score: 2 },
        { text: "Analyzing data", category: "Data", score: 2 },
        { text: "Designing user interfaces", category: "Design", score: 2 },
        { text: "Planning a project", category: "Product", score: 2 },
      ],
    },
    {
      id: 2,
      question: "Which subject excites you the most?",
      options: [
        { text: "Computer Science", category: "Tech", score: 2 },
        { text: "Mathematics & Statistics", category: "Data", score: 2 },
        { text: "Art & Design", category: "Design", score: 2 },
        { text: "Business & Management", category: "Product", score: 2 },
      ],
    },
    {
      id: 3,
      question: "Which tool would you prefer to work with?",
      options: [
        { text: "VS Code / IDEs", category: "Tech", score: 2 },
        { text: "Python / R / Excel", category: "Data", score: 2 },
        { text: "Figma / Sketch", category: "Design", score: 2 },
        { text: "Roadmaps / Jira", category: "Product", score: 2 },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [interests, setInterests] = useState([]);
  const [result, setResult] = useState(null);

  const interestOptions = ["Tech", "Data", "Design", "Product"];

  const handleAnswer = (qId, category, score) => {
    setAnswers({ ...answers, [qId]: { category, score } });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((i) => i !== value));
    }
  };

  const calculateResult = () => {
    const scores = { Tech: 0, Data: 0, Design: 0, Product: 0 };
    Object.values(answers).forEach((a) => {
      scores[a.category] += a.score;
    });

    // Boost scores by interest match
    interests.forEach((i) => {
      scores[i] += 1;
    });

    // Find max score
    const maxScore = Math.max(...Object.values(scores));
    const compatibleCategories = Object.keys(scores).filter(
      (cat) => scores[cat] === maxScore
    );

    // Match careers from selected categories
    const recommended = careers.filter((c) =>
      compatibleCategories.includes(c.category)
    );

    setResult({ scores, recommended });
  };

  return (
    <div className="career-quiz">
      <h2>Career Compatibility Quiz</h2>

      <div className="quiz-section">
        {questions.map((q) => (
          <div key={q.id} className="quiz-question">
            <p>{q.question}</p>
            <div className="quiz-options">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`quiz-btn ${
                    answers[q.id]?.category === opt.category ? "selected" : ""
                  }`}
                  onClick={() => handleAnswer(q.id, opt.category, opt.score)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="interest-section">
        <h3>Select your interests</h3>
        <div className="interests">
          {interestOptions.map((i) => (
            <label key={i}>
              <input
                type="checkbox"
                value={i}
                checked={interests.includes(i)}
                onChange={handleInterestChange}
              />
              {i}
            </label>
          ))}
        </div>
      </div>

      <button className="submit-btn" onClick={calculateResult}>
        See Recommended Careers
      </button>

      {result && (
        <div className="quiz-result">
          <h3>Recommended Careers:</h3>
          <ul>
            {result.recommended.map((c) => (
              <li key={c.id}>
                <strong>{c.title}</strong> ({c.category})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
