import { Users,Heart, Clock } from 'lucide-react';

export default function PlatformUsageStats({ stats }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 hover:cursor-pointer">
      {stats.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-black text-xl">Platform: <span className="text-grey-500 text-shadow-md">{card.platform} </span></p>
              <p className="text-black text-xl">Time Watched: <span className="text-grey-500 text-shadow-md">{card.totalTime} </span></p>
              <p className="text-black text-xl">Users: <span className="text-grey-500 text-shadow-md">{card.users} </span></p>
            </div>

             <div className={`bg-purple-500 p-3 rounded-lg`}>
              <Clock className="text-white" size={24} />
            </div>
         
          </div>
        </div>
      ))}
    </div>
  );
}