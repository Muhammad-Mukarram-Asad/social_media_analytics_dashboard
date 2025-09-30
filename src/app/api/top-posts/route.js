import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const topPosts = await query(`
           SELECT 
            p.post_id,                           -- Get the post ID from posts table
            u.username,                          -- Get username from users table
            p.platform,                          -- Which platform (Instagram, Facebook, etc.)
            p.post_type,                         -- Type of post (Photo, Video, Text)
            p.likes_count,                       -- Number of likes
            p.comments_count,                    -- Number of comments
            p.shares_count,                      -- Number of shares
            (p.likes_count + p.comments_count + p.shares_count) as total_engagement  
                                                            -- Calculate TOTAL engagement by adding likes + comments + shares
                                                -- "as total_engagement" gives this calculated value a name
            FROM posts p                           -- From posts table (we nickname it 'p' for short)
            JOIN users u ON p.user_id = u.user_id  -- Connect posts table with users table
                                                -- Match rows where user_id is the same in both tables
                                                -- This lets us get the username for each post
            ORDER BY total_engagement DESC         -- Sort by total_engagement (highest first)
                                                -- DESC means descending (biggest to smallest)
            LIMIT 5                                -- Only return the top 5 results
            `);
    return NextResponse.json(topPosts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
