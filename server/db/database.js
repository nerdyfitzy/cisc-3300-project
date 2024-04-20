import mysql from "mysql2/promise";
import { production, development } from "./options.js";
import { environment } from "../env.js";

const options = environment == "production" ? production : development;

console.log("Using DB Auth -", options);
const pool = await mysql.createConnection(options);

export const getMessage = async (id) => {
  const [res] = await pool.query(
    `
    SELECT *
    FROM Messages
    WHERE id = ?
  `,
    [id]
  );
  return res[0];
};

export const getMessages = async () => {
  const [res] = await pool.query("SELECT * FROM Messages");
  console.log("Successfully got all messages");
  return res;
};

export const createMessage = async (content, user) => {
  const [res] = await pool.query(
    `
      INSERT INTO Messages (content, user)
      VALUES (?, ?)
  `,
    [content, user]
  );

  const id = res.insertId;
  console.log("Successfully made new message id:", id);
  return getMessage(id);
};
