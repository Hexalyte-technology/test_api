const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "200106",
  database: "my_database",
});

module.exports = mysqlPool;
