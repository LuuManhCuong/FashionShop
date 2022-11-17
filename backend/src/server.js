const express = require("express");
const app = express();
const connection = require("./config/database");
const router = require("./router/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

router(app);

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connect ");

  socket.on("send_comment", (data) => {
    console.log("send ", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnect ", socket.id);
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
