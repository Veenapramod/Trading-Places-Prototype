import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Scenario from "./pages/Scenario";
import Report from "./pages/Report";
import Consent from "./pages/Consent";
import {
  Menu,
  X,
  LayoutDashboard,
  FileText,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navLinks = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/scenario", label: "Scenario", icon: <BarChart3 size={20} /> },
    { path: "/report", label: "Report", icon: <FileText size={20} /> },
    { path: "/consent", label: "Consent", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden transition-all duration-300">
      {/* Sidebar */}
      <div
        className={`bg-indigo-700 text-white h-full flex flex-col shadow-lg transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header / Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-indigo-500">
          {isSidebarOpen && (
            <h1 className="text-lg font-semibold tracking-wide">Trading Places</h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-4 space-y-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 py-2 px-4 mx-2 rounded-lg transition-all duration-200 ${
                  active
                    ? "bg-indigo-600 text-white"
                    : "text-indigo-100 hover:bg-indigo-600/40"
                }`}
              >
                {link.icon}
                {isSidebarOpen && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 text-sm text-indigo-200">
          {isSidebarOpen ? "v1.0.0" : "v1"}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 transition-all duration-300">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            {location.pathname.replace("/", "").toUpperCase() || "DASHBOARD"}
          </h2>
        </div>

        {/* Page Content */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scenario" element={<Scenario />} />
            <Route path="/report" element={<Report />} />
            <Route path="/consent" element={<Consent />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
