<template>
  <div>
    <h3>Playing {{ color == "w" ? "white" : "black" }}</h3>
    <div ref="board" id="board"></div>
  </div>
</template>

<script>
import "cm-chessboard/styles/cm-chessboard.css";
import {
  Chessboard as cmChessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
} from "cm-chessboard";
import {
  WebChessSocket,
  SocketEmitMessage,
  SocketReceiveMessage,
} from "@/utils/WebChessSocket";
export default {
  name: "CmChessboard",
  components: {},
  props: {
    authenticated: {
      type: Boolean,
      default: true,
    },
    socket: {
      type: WebChessSocket,
    },
  },
  data() {
    return {
      color: "white", // black
      board: null
    };
  },
  mounted() {
    if (!this.authenticated) return this.$router.push({ name: "home" });
    this.onceAuthenticated();
  },
  methods: {
    onceAuthenticated() {
      this.setBoard();
      this.setUpSocket();
    },
    //
    // https://github.com/WonJunior/webchess/blob/dc995650eb725561b1665de0737b720a5b791901/client/src/views/Chessboard.vue
    setBoard() {
      this.board = new cmChessboard(this.$refs.board, {
        position: "start",
        moveInputMode: MOVE_INPUT_MODE.dragPiece,
        sprite: { url: "./chessboard-sprite.svg" },
      });
      this.board.enableMoveInput((event) => {
        switch (event.type) {
          case INPUT_EVENT_TYPE.moveStart:
            return true;
          case INPUT_EVENT_TYPE.moveDone:
            this.socket.emit(SocketEmitMessage.MOVE, {
              from: event.squareFrom,
              to: event.squareTo,
            });
            return true;
          case INPUT_EVENT_TYPE.moveCanceled:
            return null;
        }
      });
    },
    setUpSocket() {
      this.socket.on(SocketReceiveMessage.YOURTURN, (state) => {
        console.log("My turn!", state);
        this.board.setPosition(state);
        // this.board.setFEN(state)
      });
      this.socket.on(SocketReceiveMessage.INVALIDATE, (state) => {
        console.log("Invalid move! reseting to ", state);
        this.board.setPosition(state);
        // this.setBoard(state)
      });
    },
  },
};
</script>

<style lang="less" scope="scope">
#board {
  max-width: 450px;
  max-height: 430px;
  width: calc(100vw - 40px);
  height: calc(95vw - 40px);
  margin: auto;
}
</style>
