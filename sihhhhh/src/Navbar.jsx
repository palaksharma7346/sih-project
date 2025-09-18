// src/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Career Guide</h2>
      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("profile")}>Profile Setup</li>
        <li onClick={() => setPage("quiz")}>Take a Quiz</li>
        <li onClick={() => setPage("guidance")}>Guidance</li>
        <li onClick={() => setPage("courses")}>Courses</li>
        <li onClick={() => setPage("contact")}>Contact Us</li>
      </ul>
    </nav>
  );
}
