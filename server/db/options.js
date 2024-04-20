import {
  HOST,
  NAME,
  USER,
  PASS,
  CLEARDB_DATABASE_URL,
  DB_PORT,
} from "../env.js";

const development = {
  host: HOST,
  user: USER,
  password: PASS,
  port: DB_PORT,
  database: NAME,
  ssl: { rejectUnauthorized: false },
};

const production = CLEARDB_DATABASE_URL;

export { development, production };
