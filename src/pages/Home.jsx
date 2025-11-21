import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/trading-places-simulator-1.png";

export default function Home() {
  return (
    <div className="pt-32 px-6 text-center min-h-screen">

      <img
        src={logo}
        alt="logo"
        className="w-40 h-40 object-contain mx-auto neon-glow"
      />

      <h1 className="text-5xl font-bold mt-8 text-[var(--brand-dark)]">
        Empathy Through Experience
      </h1>

      <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
        Step into real-world scenarios designed to build cultural intelligence,
        awareness, and empathy through interactive learning.
      </p>

      <div className="flex justify-center gap-6 mt-12">

        <Link to="/scenario"
          className="px-8 py-4 bg-[var(--brand-blue)] text-[var(--brand-dark)] font-bold rounded-xl hover:scale-105 shadow-lg neon-glow">
          Start Scenario
        </Link>

        <Link to="/dashboard"
          className="px-8 py-4 bg-[var(--brand-pink)] text-white font-bold rounded-xl hover:scale-105 shadow-lg neon-glow">
          View Dashboard
        </Link>

      </div>

    </div>
  );
}
