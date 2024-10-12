import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
 const url = 'postgresql://zakianwar:KHQJgdrnGo62@ep-broad-brook-a5vsdt8m.us-east-2.aws.neon.tech/Course-generator?sslmode=require'
const sql = neon(url);
export const db = drizzle(sql);
