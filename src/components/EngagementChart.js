'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function EngagementChart({ data, theme }) {
  return (
    <div className={`rounded-lg shadow-lg p-6 mt-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold mb-4">Engagement Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
          <XAxis dataKey="date" stroke={theme === 'dark' ? '#9ca3af' : '#374151'} />
          <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#374151'} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
              border: 'none',
              borderRadius: '8px',
              color: theme === 'dark' ? '#ffffff' : '#000000'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="likes" stroke="#3b82f6" strokeWidth={2} name="Likes" />
          <Line type="monotone" dataKey="comments" stroke="#10b981" strokeWidth={2} name="Comments" />
          <Line type="monotone" dataKey="shares" stroke="#f59e0b" strokeWidth={2} name="Shares" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}