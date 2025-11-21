import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function WorkspaceLayout() {
  return (
    <div className="pt-16 min-h-screen bg-[var(--brand-bg)]">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-6 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
