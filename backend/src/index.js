const express = require("express");
const app = express();
const connection = require("./config/database");
const port = 3001;
app.get("/", (req, res) => {
  let sql = "SELECT * from slider";
  connection.query(sql, (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

app.get("/user", (req, res) => {
  let sql = "SELECT * from user";
  connection.query(sql, (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

app.get("/info", (req, res) => {
  let slug = "quần nam";
  let sql = `select url from product inner join image_product on image_product.idProduct = product.idProduct where product.name = "${slug}"`;
  let sql2 = `select * from user`;
  let sql23 = `select * from slider`;

  connection.query(`${sql};${sql2};${sql23}`, (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

connection.connect((err, result) => {
  err
    ? console.log("kết nối database thất bại")
    : console.log("kết nối database thành công");
});

app.listen(port, () => {
  console.log(`backend api listening on port ${port}`);
});
