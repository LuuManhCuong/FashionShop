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

connection.connect((err, result) => {
  err
    ? console.log("kết nối database thất bại")
    : console.log("kết nối database thành công");
});

app.listen(port, () => {
  console.log(`backend api listening on port ${port}`);
});
