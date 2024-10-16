const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "200106",
  database: "test_db",
});

module.exports = mysqlPool;
