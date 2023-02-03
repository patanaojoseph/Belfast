import express from "express";
import mysql from "mysql";

const app = express();

// setup database connection from mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belfast_db",
});
// to test if the backend is working
app.get("/", (req, res) => {
  res.json("This is the backend");
});
// get data from mysql
app.get("/products", (req, res) => {
  const q = "SELECT * from products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(5000, () => {
  // backend connection
  console.log("Backend Connected.");
});
