'use client';
import { useEffect, useState } from 'react';
import StatsCards from '@/components/StatsCards';
import PlatformUsageStats from '@/components/PlatformUsage';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers : 0,
    totalPosts : 0,
    totalEngagement : 0,
    avgTimeSpent : 0,
  });

  const [platformUsage, setPlatformUsage] = useState({
    platform : '',
    totalTime : 0,
    users : 0
  });

  const [loading, setLoading] = useState(true);
  const [platformLoading, setPlatformLoading] = useState(true);

  useEffect(() => {
    fetch('/api/stats').
    then((res) => res.json()).
    then((data) => {
      setStats(data);
      setLoading(false);
    });

     fetch('/api/platform-usage').
    then((res) => res.json()).
    then((data) => {
      setPlatformUsage(data);
      setPlatformLoading(false);
    });
  }, [])


 if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

   if (platformLoading) {
    return <div className="flex items-center justify-center min-h-screen">Platform Usage Stats Loading...</div>;
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-black">Social Media Analytics Dashboard</h1>
      <StatsCards stats={stats} />
      <PlatformUsageStats stats={platformUsage} />
    </div>

    </>
    
  );
}