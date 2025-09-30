export default function TopPostsTable({ posts, theme }) {
  return (
    <div className={`rounded-lg shadow-lg p-6 mt-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold mb-4">Top Performing Posts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className={theme === 'dark' ? 'bg-gray-700' : 'bg-gradient-to-r from-purple-50 to-pink-50'}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>User</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Platform</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Type</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Likes</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Comments</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Shares</th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Total</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {posts.map((post) => (
              <tr key={post.post_id} className={`transition-colors ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-purple-50'}`}>
                <td className="px-6 py-4 whitespace-nowrap font-medium">{post.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {post.platform}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{post.post_type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.likes_count}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.comments_count}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.shares_count}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                    {post.total_engagement}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}