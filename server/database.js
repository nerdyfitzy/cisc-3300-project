import mysql from "mysql2";
import "dotenv/config";

const { LOCALHOST, NAME, USER, PASS } = process.env;

const pool = mysql
  .createPool({
    host: LOCALHOST,
    user: USER,
    password: PASS,
    database: NAME,
  })
  .promise();

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
