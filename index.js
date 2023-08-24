import express from "express";
const app = express();

import * as url from "url";
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import path from "path";

import http from "http";
const serVer = http.createServer(app);
//inside server we loaded the object app

import { Server } from "socket.io";
const io = new Server(serVer);

const dirPath = path.join(__dirname, "./public/index.html");
app.get("/", (req, res) => {
  //   res.send("<h1>Hello world</h1>");
  res.sendFile(dirPath);
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message::", msg);
  });
});

serVer.listen(3000, () => {
  console.log(`server listening of port 3000`);
});
