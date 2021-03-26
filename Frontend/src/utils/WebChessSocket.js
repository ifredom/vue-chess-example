import io from "socket.io-client";

export const SocketEmitMessage = {
  INVITE: "invite",
  MOVE: "move",
  JOIN: "join",
};
export const SocketReceiveMessage = {
  YOURTURN: "yourTurn",
  INVALIDATE: "invalidate",
  INVITATION: "invite",
};

export class WebChessSocket {
  constructor(token) {
    this.socket = io(process.env.VUE_APP_BACKEND_ROOT);
    // this.socket = io(process.env.VUE_APP_BACKEND_ROOT, {
    //   query: { token: token },
    // });
    this.socket.on("connection", () => {
      console.log("客户端连接connect " + socket.id);
    });
  }

  emit(msg, o) {
    this.socket.emit(msg, o);
  }

  on(msg, callback) {
    this.socket.on(msg, callback);
  }
}
