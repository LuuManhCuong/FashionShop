// import { Sever } from "socket.io";
// const io = require("socket.io")(server);
// const server = require("http").createServer();

const http = require("http");
const cors = require("cors");
const app = require("express");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = (id) => {
  return new Server(server, {
    cors: {
      origin: `http://localhost:3000/blog/detail/${id}`,
      methods: ["GET", "POST"],
    },
  });
};

module.exports = io;
