const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "127.0.0.1",
  user: "root1",
  password: "1234",
  database: "my_database",
});

module.exports = mysqlPool;
