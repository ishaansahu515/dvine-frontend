import { LogOut, LayoutDashboard, Users, FileText, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-6 hidden md:flex flex-col justify-between">
      {/* Top content */}
      <div>
        <h1 className="text-2xl font-bold text-blue-600 mb-8">Dvine H₂O</h1>
        <nav className="space-y-4">
          <a href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-lg font-semibold">
            <LayoutDashboard /> Dashboard
          </a>
          <a href="/consumers" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-lg font-semibold">
            <Users /> Consumers
          </a>
          <a href="/reports" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-lg font-semibold">
            <FileText /> Reports
          </a>
          <a href="/settings" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-lg font-semibold">
            <Settings /> Settings
          </a>
        </nav>
      </div>

      {/* Bottom image */}
      <div className="mt-6">
        <img
          src="/family.png"
          alt="Family Banner"
          className="w-full max-w-xs mx-auto rounded"
          width={320}
          height={180}
        />
      </div>
    </aside>
  );
}
