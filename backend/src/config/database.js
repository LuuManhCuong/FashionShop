const mysql = require("mysql2");
require("dotenv").config();
// console.log(process.env.DB_HOST)

// create the connection to database

var connection = mysql.createConnection({
  host: "fashionshop.mysql.database.azure.com",
  user: "fashionshop",
  password: "Admin121!!",
  database: "fashionshop",
  port: 3306,
});
module.exports = connection;
