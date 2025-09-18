// src/ProfileSetup.jsx
import { useState } from "react";

export default function ProfileSetup({ onSubmit }) {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    education: "",
  });

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(profile);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Setup Your Profile
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Tell us a little about yourself to get personalized guidance.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Education */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Education Level</label>
            <select
              name="education"
              value={profile.education}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              required
            >
              <option value="">Select your education level</option>
              <option value="10th_or_below">10th Grade or below (to guide for 11th/12th stream)</option>
              <option value="11th_12th">11th & 12th Grade (for stream selection)</option>
              <option value="after_12th">After 12th (college level guidance)</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:opacity-90 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </section>
  );
}
