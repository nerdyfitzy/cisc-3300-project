import express from "express";
const app = express();

console.log(app);

app.listen(7777, () => {
  console.log("server started");
});

app.get("/", (req, res) => {});
