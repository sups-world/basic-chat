import express from "express";
const app = express();

import http from "http";
const server = http.createServer(app);
//inside server we loaded the object app

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log(`server listening of port 3000`);
});
