// src/ContactPage.jsx
import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Reach out to us via email or phone.
        </p>

        <div className="space-y-4">
          <p className="text-gray-700 font-medium">
            Email: <span className="text-indigo-600">support@careerguide.com</span>
          </p>
          <p className="text-gray-700 font-medium">
            Phone: <span className="text-indigo-600">+91-9876543210</span>
          </p>
        </div>

        <button className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
          Send a Message
        </button>
      </div>
    </section>
  );
}
