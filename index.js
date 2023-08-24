import express from "express";
const app = express();

import * as url from "url";
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import path from "path";

import http from "http";
const server = http.createServer(app);
//inside server we loaded the object app

const dirPath = path.join(__dirname, "./public/index.html");
app.get("/", (req, res) => {
  //   res.send("<h1>Hello world</h1>");
  res.sendFile(dirPath);
});

server.listen(3000, () => {
  console.log(`server listening of port 3000`);
});
