import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const timeline = await query(`
      SELECT 
        DATE(post_date) as date,
        SUM(likes_count) as likes,
        SUM(comments_count) as comments,
        SUM(shares_count) as shares
      FROM posts 
      GROUP BY DATE(post_date)
      ORDER BY date
    `);

    return NextResponse.json(timeline);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}