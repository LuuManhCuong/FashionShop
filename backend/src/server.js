const express = require("express");
const app = express();
const connection = require("./config/database");
const router = require("./router/router");
const bodyParser = require("body-parser");
const port = 3001;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

router(app);

connection.connect((err, result) => {
  err
    ? console.log("kết nối database thất bại")
    : console.log("kết nối database thành công");
});

app.listen(port, () => {
  console.log(`backend api listening on port ${port}`);
});