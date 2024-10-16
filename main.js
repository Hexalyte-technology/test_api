console.log("Application Start");
const express = require("express");
const app = express();
app.use(express.json());

// const mysqlPool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "200106",
//   database: "test_db",
// });

const mysqlPool = require("./db");

const userRotes = require("./controllers/users.controller");

app.use("/api/v1", userRotes);

mysqlPool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
  connection.release();
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
