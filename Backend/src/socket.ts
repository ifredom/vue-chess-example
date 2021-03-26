
import { Server } from 'http';
import SocketIOServer, { Socket } from 'socket.io';


enum WebSocketServerStatus {
  CONNECTION = 'connection'
}

export default class WebSocketServer {
  private io: SocketIOServer.Server;
  constructor(server: Server) {
    this.io = SocketIOServer(server);
  }

  public listen() {
    this.io.on(WebSocketServerStatus.CONNECTION, (socket) => {
      // console.log(socket);
      // socket.emit('request', /* … */); // emit an event to the socket
      // io.emit('broadcast', /* … */); // emit an event to all connected sockets

      // 前端发送的数据格式
      // { from: 'g2', to: 'g3' }
      // { from: 'f2', to: 'f3' }
      socket.on('move', (result: any) => { console.log(result) }); // listen to the event

    })
  }
}