import { Users, TrendingUp, Activity } from "lucide-react";

const icons = {
  users: <Users className="text-blue-600 w-6 h-6" />,
  "trending-up": <TrendingUp className="text-green-600 w-6 h-6" />,
  activity: <Activity className="text-purple-600 w-6 h-6" />,
};

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: keyof typeof icons;
};

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between">
      <div>
        <h2 className="text-gray-500">{title}</h2>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div>{icons[icon]}</div>
    </div>
  );
}
