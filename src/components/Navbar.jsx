import React from "react";
import logo from "../assets/trading-places-simulator-1.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--brand-dark)] text-white py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain neon-glow"
          />
          <span className="text-xl font-semibold tracking-wide">
            Trading Places
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link className="hover:text-[var(--brand-blue)]" to="/">Home</Link>
          <Link className="hover:text-[var(--brand-blue)]" to="/dashboard">Dashboard</Link>
          <Link className="hover:text-[var(--brand-blue)]" to="/scenario">Scenario</Link>
          <Link className="hover:text-[var(--brand-blue)]" to="/report">Report</Link>
          <Link className="hover:text-[var(--brand-blue)]" to="/workspace/dashboard">Workspace</Link>
        </div>

      </div>
    </nav>
  );
}
