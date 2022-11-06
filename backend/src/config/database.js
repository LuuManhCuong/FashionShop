const mysql = require("mysql2");
require("dotenv").config();
// console.log(process.env.DB_HOST)

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  debug: false,
  multipleStatements: true,
});

module.exports = connection;
