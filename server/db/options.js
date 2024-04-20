import { HOST, NAME, USER, PASS, DB_CLIENT, DB_PORT } from "../env.js";
import fs from "fs";

const ca = fs.readFileSync("./server/certs/ca.pem");
const cert = fs.readFileSync("./server/certs/cert.pem");
const key = fs.readFileSync("./server/certs/key.pem");

console.log(cert);

const development = {
  connection: {
    host: HOST,
    user: USER,
    password: PASS,
    port: DB_PORT,
    database: NAME,
    ssl: { rejectUnauthorized: false },
  },
};

const production = {
  connection: {
    host: HOST,
    user: USER,
    password: PASS,
    port: DB_PORT,
    database: NAME,
    ssl: {
      rejectUnauthorized: true,
      ca,
      cert,
      key,
    },
  },
};

export { development, production };
