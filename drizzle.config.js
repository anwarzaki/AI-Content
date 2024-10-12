import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.jsx', 
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://zakianwar:KHQJgdrnGo62@ep-broad-brook-a5vsdt8m.us-east-2.aws.neon.tech/Course-generator?sslmode=require'
  },
});
