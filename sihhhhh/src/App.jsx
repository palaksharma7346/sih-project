// src/App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import ProfileSetup from "./ProfileSetup";
import InterestsQuiz from "./InterestsQuiz";
import GuidancePage from "./GuidancePage";
import CoursesPage from "./CoursesPage";
import ContactPage from "./ContactPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [profile, setProfile] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "home":
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Welcome to Career Guidance Portal 🎓
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Discover your ideal career path based on your interests, skills, and
          aspirations. Let’s find the perfect stream or course for you!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-12">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">📚 Explore Courses</h3>
          <p className="text-gray-600">
            Learn about various subjects and streams available for your future.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">🧑‍🎓 Take a Career Quiz</h3>
          <p className="text-gray-600">
            Answer fun questions to find the best stream or career suited for you.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">🎯 Personalized Guidance</h3>
          <p className="text-gray-600">
            Get suggestions based on your profile, interests, and strengths.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Discover Your Future?
        </h2>
        <p className="mb-6">
          Start your journey today and let us guide you step by step!
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Take the Quiz 🚀
        </button>
      </section>
    </div>
  );

      case "profile":
        return <ProfileSetup onSubmit={setProfile} />;
      case "quiz":
        return <InterestsQuiz onSubmit={setQuizResults} profile={profile} />;
      case "guidance":
        return <GuidancePage profile={profile} quizResults={quizResults} />;
      case "courses":
        return <CoursesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <h1 className="welcome">Welcome to Career Guidance Portal 🎓</h1>;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <main className="main-content">{renderPage()}</main>
    </div>
  );
}
