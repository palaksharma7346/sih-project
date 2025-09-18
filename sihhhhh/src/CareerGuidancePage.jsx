import React, { useState } from "react";
import "./CareerGuidancePage.css";
import CareerQuiz from "./CareerQuiz";

export default function CareerGuidancePage() {
  const [selectedCareer, setSelectedCareer] = useState(null);

  const careers = [
    {
      id: "swe",
      title: "Software Engineer",
      category: "Tech",
      level: "Beginner → Senior",
      summary:
        "Design, build and maintain software systems. Strong fundamentals in algorithms, data structures and system design help you scale.",
      skills: ["Data Structures", "System Design", "Programming"]
    },
    {
      id: "ds",
      title: "Data Scientist",
      category: "Data",
      level: "Entry → Lead",
      summary:
        "Blend statistics, ML, and engineering to extract value from data and build predictive systems.",
      skills: ["Statistics", "ML", "Python", "Visualization"]
    },
    {
      id: "ux",
      title: "UX Designer",
      category: "Design",
      level: "Junior → Principal",
      summary: "Design delightful experiences with research, prototyping and testing.",
      skills: ["Research", "Prototyping", "Figma"]
    },
    {
      id: "pm",
      title: "Product Manager",
      category: "Product",
      level: "Associate → Head",
      summary: "Own product outcomes by working at the intersection of design, engineering, and business.",
      skills: ["Roadmapping", "User Research", "Prioritization"]
    }
  ];

  return (
    <div className="career-page">
      {/* Header */}
      <header>
        <h1>Career Guidance</h1>
        <p>Explore paths, skills, and next steps tailored for you.</p>
      </header>

      {/* Career Cards */}
      <main>
        <section className="career-list">
          {careers.map((career) => (
            <div
              key={career.id}
              className="career-card"
              onClick={() => setSelectedCareer(career)}
            >
              <h2>{career.title}</h2>
              <p>{career.summary}</p>
              <div className="skills">
                {career.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              <span className="category">{career.category}</span>
            </div>
          ))}
        </section>

        {/* Quiz Section */}
        <section className="quiz-wrapper">
          <CareerQuiz careers={careers} />
        </section>
      </main>

      {/* Modal for Career Details */}
      {selectedCareer && (
        <div className="career-modal" onClick={() => setSelectedCareer(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedCareer(null)}>×</button>
            <h2>{selectedCareer.title}</h2>
            <p>{selectedCareer.summary}</p>
            <p><strong>Level:</strong> {selectedCareer.level}</p>
            <p><strong>Skills:</strong> {selectedCareer.skills.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}
