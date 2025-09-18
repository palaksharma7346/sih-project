// src/CoursesPage.jsx
import React, { useState } from "react";

const coursesData = [
  {
    name: "Engineering",
    category: "Science",
    description: "Learn to design, build, and maintain machines, structures, and systems.",
    skills: ["Problem Solving", "Mathematics", "Programming", "Design Thinking"],
    opportunities: "Software Developer, Civil Engineer, Mechanical Engineer, Electrical Engineer",
    duration: "4-5 years",
    prerequisites: "Math and Physics at high school level",
  },
  {
    name: "Medicine",
    category: "Science",
    description: "Study human biology, diseases, and how to treat patients.",
    skills: ["Biology", "Chemistry", "Critical Thinking", "Compassion"],
    opportunities: "Doctor, Surgeon, Researcher, Healthcare Consultant",
    duration: "5-6 years",
    prerequisites: "Biology and Chemistry at high school level",
  },
  {
    name: "Business",
    category: "Commerce",
    description: "Learn to manage companies, resources, and business operations.",
    skills: ["Management", "Leadership", "Accounting", "Marketing"],
    opportunities: "Business Analyst, Manager, Entrepreneur, Consultant",
    duration: "3-4 years",
    prerequisites: "High school completion",
  },
  {
    name: "Design",
    category: "Arts",
    description: "Learn creative skills for graphic, product, or UX/UI design.",
    skills: ["Creativity", "Figma/Photoshop", "Prototyping", "User Research"],
    opportunities: "UX/UI Designer, Graphic Designer, Product Designer",
    duration: "3-4 years",
    prerequisites: "Portfolio or creative aptitude",
  },
  {
    name: "Law",
    category: "Professional",
    description: "Study legal systems, rights, and regulations.",
    skills: ["Critical Thinking", "Research", "Communication", "Analytical Skills"],
    opportunities: "Lawyer, Legal Advisor, Judge, Corporate Counsel",
    duration: "5 years",
    prerequisites: "High school completion",
  },
  // Add more courses here as needed
];

export default function CoursesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const categoryColors = {
    Science: "bg-green-100 text-green-800",
    Commerce: "bg-yellow-100 text-yellow-800",
    Arts: "bg-pink-100 text-pink-800",
    Professional: "bg-blue-100 text-blue-800",
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-4 text-purple-700">
        Explore Courses & Opportunities
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Click on a course card to see its description, skills required, future opportunities, and more.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-indigo-600">{course.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[course.category]}`}
                >
                  {course.category}
                </span>
              </div>

              {activeIndex === index ? (
                <div className="mt-3 text-gray-700 text-sm space-y-2">
                  <p><strong>Description:</strong> {course.description}</p>
                  <p><strong>Key Skills:</strong> {course.skills.join(", ")}</p>
                  <p><strong>Future Opportunities:</strong> {course.opportunities}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
                </div>
              ) : (
                <p className="text-gray-400 text-sm mt-2">Click to view more →</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
