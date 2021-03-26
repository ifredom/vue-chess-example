import app from "./app";
import { Server } from "http";

import WebSocketServer from './socket'

import { PORT } from "./config";
var server = require('http').createServer(app);
// const server = new Server(app);

// launch HTTP server
server.listen(3000, "127.0.0.1", () =>
  console.info(`server started at http://localhost:${3000}`)
);

// launch Websockets
new WebSocketServer(server).listen()
