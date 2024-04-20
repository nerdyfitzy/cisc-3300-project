import "dotenv/config";

const {
  PORT,
  NAME,
  HOST,
  USER,
  PASS,
  DB_PORT,
  CLEARDB_DATABASE_URL,
  environment,
} = process.env;

export {
  PORT,
  NAME,
  HOST,
  USER,
  PASS,
  DB_PORT,
  CLEARDB_DATABASE_URL,
  environment,
};
