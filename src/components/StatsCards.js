import { Users, FileText, Heart, Clock } from 'lucide-react';

export default function StatsCards({ stats, theme }) {
  const cards = [
    { title: 'Total Users', value: stats.totalUsers, icon: Users, gradient: 'from-blue-500 to-blue-600' },
    { title: 'Total Posts', value: stats.totalPosts, icon: FileText, gradient: 'from-green-500 to-green-600' },
    { title: 'Total Engagement', value: stats.totalEngagement, icon: Heart, gradient: 'from-pink-500 to-pink-600' },
    { title: 'Avg Time (min)', value: stats.avgTimeSpent, icon: Clock, gradient: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`rounded-lg shadow-lg p-6 transition-transform hover:scale-105 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {card.title}
              </p>
              <p className="text-3xl font-bold mt-2">{card.value}</p>
            </div>
            <div className={`bg-gradient-to-br ${card.gradient} p-3 rounded-lg`}>
              <card.icon className="text-white" size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}