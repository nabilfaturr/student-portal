import { db } from "../configs/db.js";

export const getStudents = (req, res) => {
  try {
    const sql = `SELECT * FROM mhs`;
    db.query(sql, (error, result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
};
