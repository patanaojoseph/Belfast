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

app.get("/", (req, res) => {
  res.json("This is the backend");
});

app.listen(5000, () => {
  // backend connection
  console.log("Backend Connected.");
});
