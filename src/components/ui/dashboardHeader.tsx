export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Logout
      </button>
    </header>
  );
}
