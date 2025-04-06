import { config } from 'dotenv';
import * as fs from 'fs';

config({ path: `.env.${process.env.NODE_ENV}` });

const envFile = `.env.${process.env.NODE_ENV}`;
if (fs.existsSync(envFile)) {
  console.log(`Loading environment variables from: ${envFile}`);
  config({ path: envFile });
} else {
  console.error(`⚠️  Missing environment file: ${envFile}`);
  process.exit(1);
}

export const {
  NODE_ENV,
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  SESSION_SECRET,
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_PUBLIC_BUCKET_NAME,
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_PORT,
  ELASTICSEARCH_NODE,
  ELASTICSEARCH_USERNAME,
  ELASTICSEARCH_PASSWORD,
} = process.env;
