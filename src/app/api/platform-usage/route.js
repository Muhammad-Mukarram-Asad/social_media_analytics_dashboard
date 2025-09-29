import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const platformData = await query(`
      SELECT 
        platform, 
        SUM(time_spent_minutes) as totalTime,
        COUNT(DISTINCT user_id) as users
      FROM daily_activity 
      GROUP BY platform
    `);

    return NextResponse.json(platformData);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}