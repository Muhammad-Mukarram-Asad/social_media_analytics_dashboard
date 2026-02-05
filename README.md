# 📊 Social Media Analytics Dashboard

A real-time analytics dashboard built with **Next.js 15** and **MySQL** that provides comprehensive insights into social media performance across multiple platforms.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?style=flat-square&logo=mysql)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## 🌟 Features

- **📈 Real-time Analytics** - Live data visualization of social media metrics
- **🎨 Dark/Light Theme** - Toggle between themes for comfortable viewing
- **📊 Interactive Charts** - Powered by Recharts for beautiful data visualization
- **📱 Responsive Design** - Fully responsive across all devices
- **⚡ Fast Performance** - Optimized with Next.js 15 and server-side rendering
- **🔒 Secure API Routes** - Backend API routes with MySQL integration
- **📉 Multiple Metrics** - Track users, posts, engagement, and time spent

## 🎯 Key Metrics Tracked

- **Total Active Users** - Overall user base across platforms
- **Total Posts** - Content generation metrics
- **Engagement Rate** - User interaction analytics
- **Average Time Spent** - User retention insights
- **Platform Usage** - Distribution across social media platforms
- **Top Posts** - Highest performing content

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Recharts 3.2.1** - Data visualization
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MySQL 8.0** - Relational database
- **mysql2** - MySQL client for Node.js

### Deployment
- **Vercel** - Frontend & API hosting
- **Railway** - MySQL database hosting

## 📂 Project Structure

```
social-media-dashboard/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── stats/
│   │   │   ├── platform-usage/
│   │   │   ├── engagement-timeline/
│   │   │   └── top-posts/
│   │   ├── page.tsx          # Main dashboard page
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   ├── StatsCards.tsx
│   │   ├── PlatformChart.tsx
│   │   ├── EngagementChart.tsx
│   │   └── TopPostsTable.tsx
│   └── lib/
│       └── db.js             # Database connection
├── public/                   # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MySQL 8.0+ installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad-Mukarram-Asad/social_media_analytics_dashboard.git
   cd social_media_analytics_dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=social_media_analytics
   ```

4. **Set up the database**
   
   Import the database schema:
   ```bash
   mysql -u root -p social_media_analytics < schema.sql
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The application uses a MySQL database with the following main tables:

- **users** - User information and platform details
- **posts** - Social media posts and content
- **engagement** - Likes, comments, shares metrics
- **platform_usage** - Platform-specific statistics

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/stats` | GET | Get overall statistics |
| `/api/platform-usage` | GET | Get platform distribution data |
| `/api/engagement-timeline` | GET | Get engagement over time |
| `/api/top-posts` | GET | Get top performing posts |

## 🌐 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (see below)
   - Click Deploy

### Database Hosting (Railway)

1. Sign up at [railway.app](https://railway.app)
2. Create a new MySQL database
3. Import your schema
4. Copy connection credentials to Vercel

## 🎨 Components Overview

### StatsCards
Displays key metrics in card format with real-time updates.

### PlatformChart
Pie chart visualization showing user distribution across platforms.

### EngagementChart
Line chart tracking engagement metrics over time.

### TopPostsTable
Table view of highest performing posts with engagement details.

## 🔧 Configuration

### Customizing Charts
Edit the chart configurations in respective component files:
- Colors: Modify `COLORS` array in chart components
- Data formatting: Update data transformation logic in API routes

### Theme Customization
Modify Tailwind configuration in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

## 📈 Performance Optimization

- **Server-Side Rendering** - Initial data fetched on server
- **API Route Caching** - Implement caching for frequently accessed data
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting by Next.js

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Muhammad Mukarram Asad**

- GitHub: [https://github.com/Muhammad-Mukarram-Asad]
- LinkedIn: [https://linkedin.com/in/mukarram-asad]

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/Muhammad-Mukarram-Asad/social_media_analytics_dashboard/issues) page
2. Create a new issue if your question hasn't been answered
3. Reach out via [email/discord/etc]

## 🔮 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] Export data to CSV/PDF
- [ ] Advanced filtering options
- [ ] User authentication
- [ ] Role-based access control
- [ ] Mobile app version
- [ ] AI-powered insights
- [ ] Multi-language support

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐

Made with ❤️ using Next.js and MySQL
