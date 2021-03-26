import express, { Application } from "express";
import SocketIOServer from 'socket.io';

class App {
  public app: Application;
  constructor() {
    this.app = express();
  }
}

export default new App().app;
