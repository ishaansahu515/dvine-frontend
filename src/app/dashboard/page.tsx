import DashboardHeader from "../../components/ui/dashboardHeader";
import StatsCard from "../../components/ui/StatsCard";
import GrowthChart from "../../components/ui/GrowthChart";
import Sidebar from "../../components/ui/slidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6">
          <DashboardHeader />

          {/* STAT CARDS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <StatsCard title="Consumers" value="1.2K" icon="users" />
            <StatsCard title="Growth" value="15%" icon="trending-up" />
            <StatsCard title="Devices Active" value="320" icon="activity" />
          </section>

          {/* GROWTH CHART */}
          <div className="my-6">
            <GrowthChart />
          </div>

        </main>
      </div>
    </div>
  );
}