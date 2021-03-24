<template>
  <div>
    <h3>Playing {{ color == "w" ? "white" : "black" }}</h3>
    <div ref="board" id="board"></div>
  </div>
</template>

<script>
import "cm-chessboard/styles/cm-chessboard.css";
import Chess from "chess.js";
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR,
} from "cm-chessboard";
import {
  WebChessSocket,
  SocketEmitMessage,
  SocketReceiveMessage,
} from "@/utils/WebChessSocket";
export default {
  name: "cmchessboardmove",
  components: {},
  props: {
    authenticated: {
      type: Boolean,
      default: false,
    },
    socket: {
      type: WebChessSocket,
    },
  },
  data() {
    return {
      color: "white", // black
      board: null,
      fen: "start",
      history: [],
    };
  },
  created() {
    this.board = null;
    this.game = null;
  },
  mounted() {
    this.onceAuthenticated();
  },
  methods: {
    onceAuthenticated() {
      this.setBoard();
    },
    setBoard() {
      this.game = new Chess();
      this.board = new Chessboard(document.getElementById("board"), {
        position: this.game.fen(),
        orientation: COLOR.white,
        moveInputMode: MOVE_INPUT_MODE.dragPiece,
        responsive: true,
        sprite: {
          url: "./chessboard-sprite.svg", // pieces and markers are stored as svg in the sprite
          grid: 40, // the sprite is tiled with one piece every 40px
        },
      });
      this.board.enableMoveInput((event) => {
        switch (event.type) {
          case INPUT_EVENT_TYPE.moveStart:
            return true;
          case INPUT_EVENT_TYPE.moveDone:
            const move = this.game.move({
              from: event.squareFrom,
              to: event.squareTo,
              promotion: "q",
            });

            if (move === null) return;

            this.fen = this.game.fen();
            this.history = this.game.history({ verbose: true });

            setTimeout(() => {
              event.chessboard.setPosition(this.game.fen());
            });
            return true;
          case INPUT_EVENT_TYPE.moveCanceled:
            return null;
        }
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
