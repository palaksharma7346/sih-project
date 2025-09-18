// src/GuidancePage.jsx
import React from "react";
import "./GuidancePage.css";

export default function GuidancePage({ profile, quizResults }) {
  if (!profile || !quizResults) {
    return <p>Please complete profile setup and quiz first.</p>;
  }

  let suggestion = "";

  if (profile.education === "Below 10th" || profile.education === "10th") {
    suggestion = "Based on your interests and quiz, we suggest a suitable STREAM (Science, Commerce, Arts).";
  } else {
    suggestion = "Based on your profile, we suggest suitable COLLEGE STREAMS (Engineering, Medicine, Management, Arts, etc.).";
  }

  return (
    <div className="guidance">
      <h2>Guidance Results</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Education:</strong> {profile.education}</p>
      <p>{suggestion}</p>
    </div>
  );
}
