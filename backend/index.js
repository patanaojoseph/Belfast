import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

// setup database connection from mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belfast_db",
});
// express server middleware
app.use(express.json());
app.use(cors());
// to test if the backend is working
app.get("/", (req, res) => {
  res.json("This is the backend");
});
// get all data from mysql
app.get("/products", (req, res) => {
  const kunin = "SELECT * from products";
  db.query(kunin, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// add product to database
app.post("/products", (req, res) => {
  const isave =
    "INSERT INTO products (`name`,`brand`,`description`,`quantity`,`image`,`price`) VALUES (?)";
  const laman = [
    req.body.name,
    req.body.brand,
    req.body.description,
    req.body.quantity,
    req.body.image,
    req.body.price,
  ];
  db.query(isave, [laman], (err, data) => {
    if (err) return res.json(err);
    return res.json("A product was inserted successfully.");
  });
});

app.listen(5000, () => {
  // backend connection
  console.log("Backend Connected.");
});
