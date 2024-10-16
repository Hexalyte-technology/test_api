const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root1",
  password: "1234",
  database: "my_database",
});

module.exports = mysqlPool;
