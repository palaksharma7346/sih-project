// src/InterestsQuiz.jsx
import React, { useState } from "react";
import "./InterestsQuiz.css";

export default function InterestsQuiz({ onSubmit, profile }) {
  const [interests, setInterests] = useState([]);
  const [answers, setAnswers] = useState({});

  const handleInterest = (e) => {
    const value = e.target.value;
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleAnswer = (q, val) => {
    setAnswers({ ...answers, [q]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ interests, answers });
    alert("Quiz submitted ✅");
  };

  const questions = [
    "Do you enjoy solving math problems?",
    "Do you like reading about science?",
    "Are you interested in arts and creativity?",
    "Do you enjoy coding or technology?",
    "Would you like to work with people (teaching, counseling)?",
  ];

  return (
    <div className="quiz">
      <h2>Interests & Quiz</h2>
      <form onSubmit={handleSubmit}>
        <h3>Select Your Interests:</h3>
        <label><input type="checkbox" value="Sports" onChange={handleInterest} /> Sports</label>
        <label><input type="checkbox" value="Music" onChange={handleInterest} /> Music</label>
        <label><input type="checkbox" value="Technology" onChange={handleInterest} /> Technology</label>
        <label><input type="checkbox" value="Arts" onChange={handleInterest} /> Arts</label>

        <h3>Quiz Questions:</h3>
        {questions.map((q, i) => (
          <div key={i} className="question">
            <p>{q}</p>
            <label><input type="radio" name={`q${i}`} value="Yes" onChange={() => handleAnswer(i, "Yes")} /> Yes</label>
            <label><input type="radio" name={`q${i}`} value="No" onChange={() => handleAnswer(i, "No")} /> No</label>
          </div>
        ))}

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
}
