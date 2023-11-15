import express from "express";
import studentRouter from "./routes/student.route.js";

const app = express();
const PORT = 3000;

app.use("/api", studentRouter);

app.listen(PORT, () => {
  console.log(`Currently running on port ${PORT}... `);
});
