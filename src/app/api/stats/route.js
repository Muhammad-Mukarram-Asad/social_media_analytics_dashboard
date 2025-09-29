import { query } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get users count from the database:
    const totalUsers = await query("SELECT COUNT(*) as count FROM users");

    // Get total posts
    const totalPosts = await query("SELECT COUNT(*) as count FROM posts");

    // Get total engagement (likes + comments + shares)
    const engagement = await query(
      "SELECT SUM(likes_count + comments_count + shares_count) as total from posts;"
    );

    // Get average time spent
    const avgTime = await query(
      "SELECT AVG(time_spent_minutes) as average FROM daily_activity"
    );

    return NextResponse.json({
      totalUsers: totalUsers[0].count,
      totalPosts: totalPosts[0].count,
      totalEngagement: engagement[0].total || 0,
      avgTimeSpent: Math.round(avgTime[0].average || 0),
    }, {status: 200});
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
