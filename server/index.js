import express from "express";
import { db } from "./configs/db.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const sql = `SELECT * FROM mhs`;
  db.query(sql, (error, result) => {
    console.log(result);
  });
});

app.listen(PORT, () => {
  console.log(`Currently running on port ${PORT}... `);
});
