import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/consent", label: "Consent" },
    { path: "/scenarios", label: "Scenarios" },
    { path: "/report", label: "Report" },
  ];

  return (
    <div className="bg-indigo-700 text-white w-64 min-h-screen p-6 flex flex-col shadow-lg">
      <h1 className="text-2xl font-bold mb-8 text-center">Trading Places</h1>

      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`py-2 px-4 rounded-lg font-medium text-center transition-all duration-200 ${
              location.pathname === link.path
                ? "bg-indigo-500 shadow-md"
                : "hover:bg-indigo-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-indigo-500 text-sm text-center text-indigo-200">
        © 2025 LSBU Prototype
      </div>
    </div>
  );
}
