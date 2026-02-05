'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import StatsCards from '@/components/StatsCards';
import PlatformChart from '@/components/PlatformChart';
import EngagementChart from '@/components/EngagementChart';
import TopPostsTable from '@/components/TopPostsTable';

interface Stats {
  totalUsers: number;
  totalPosts: number;
  totalEngagement: number;
  avgTimeSpent: number;
}

interface PlatformData {
  platform: string;
  users: number;
}

interface EngagementData {
  date: string;
  engagement: number;
}

interface TopPost {
  id: number;
  title: string;
  engagement: number;
  platform: string;
}

export default function Dashboard() {
  
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, totalPosts: 0, totalEngagement: 0, avgTimeSpent: 0 });
  const [platformData, setPlatformData] = useState<PlatformData[]>([]);
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);
  const [topPosts, setTopPosts] = useState<TopPost[]>([]);
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/stats').then(res => res.json()),
      fetch('/api/platform-usage').then(res => res.json()),
      fetch('/api/engagement-timeline').then(res => res.json()),
      fetch('/api/top-posts').then(res => res.json())
    ]).then(([statsData, platformData, engagementData, topPostsData]) => {
      setStats(statsData);
      setPlatformData(platformData);
      setEngagementData(engagementData);
      setTopPosts(topPostsData);
      setLoading(false);
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'}`}>
        <div className="text-2xl font-semibold">Loading Dashboard...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 text-gray-900'}`}>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Social Media Analytics Dashboard
              </h1>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Real-time insights into your social media performance
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-100 shadow-md'
              }`}
            >
              {theme === 'dark' ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
            </button>
          </div>
          
          <StatsCards stats={stats} theme={theme} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <PlatformChart data={platformData} theme={theme} />
            <div className={`rounded-lg shadow-lg p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-2xl font-bold mb-4">Quick Insights</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Most Active Platform</p>
                  <p className="text-xl font-bold">{platformData[0]?.platform || 'N/A'}</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Active Users</p>
                  <p className="text-xl font-bold">{stats.totalUsers}</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4 py-2">
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Engagement Rate</p>
                  <p className="text-xl font-bold">{Math.round(stats.totalEngagement / stats.totalPosts)}% per post</p>
                </div>
              </div>
            </div>
          </div>
          
          <EngagementChart data={engagementData} theme={theme} />
          <TopPostsTable posts={topPosts} theme={theme} />
        </div>
      </div>
    </div>
  );
}
