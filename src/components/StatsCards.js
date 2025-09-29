import { Users, FileText, Heart, Clock } from 'lucide-react';

export default function StatsCards({ stats }) {
  const cards = [
    { title: 'Total Users', value: stats.totalUsers, icon: Users, color: 'bg-blue-500' },
    { title: 'Total Posts', value: stats.totalPosts, icon: FileText, color: 'bg-green-500' },
    { title: 'Total Engagement', value: stats.totalEngagement, icon: Heart, color: 'bg-pink-500' },
    { title: 'Avg Time (min)', value: stats.avgTimeSpent, icon: Clock, color: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4 hover:cursor-pointer">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
            <div className={`${card.color} p-3 rounded-lg`}>
              <card.icon className="text-white" size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}