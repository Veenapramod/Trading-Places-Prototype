import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { path: "/workspace/dashboard", label: "Dashboard" },
    { path: "/workspace/scenario", label: "Scenario Practice" },
    { path: "/workspace/report", label: "Report as PDF" },
    { path: "/workspace/pulse", label: "Culture Pulse" },
  ];

  return (
    <div className="bg-[var(--brand-dark)] text-white w-64 min-h-screen p-6 flex flex-col shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center">Workspace</h1>

      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`py-2 px-4 rounded-lg font-medium text-center transition-all duration-200 ${
              location.pathname.startsWith(link.path)
                ? "bg-[var(--brand-blue)] text-[var(--brand-dark)] shadow-md"
                : "hover:bg-[var(--brand-blue)]/20"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/20 text-sm text-center text-white/80">
        © 2025 LSBU Prototype
      </div>
    </div>
  );
}
