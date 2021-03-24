<template>
  <div>
    <h3>Playing {{ color == "w" ? "white" : "black" }}</h3>
    <div ref="board" id="board"></div>
    <button @click="changeOrientation">changeOrientation</button>
    <button @click="clearPosition">清空</button>
    <button @click="setPosition">设置fen</button>
  </div>
</template>

<script>
import "cm-chessboard/styles/cm-chessboard.css";

import {
  WebChessSocket,
  SocketEmitMessage,
  SocketReceiveMessage,
} from "@/utils/WebChessSocket";
import { ChessEngine } from "@/utils/chessengine";
import { fens } from "@/utils/fens";
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
      color: "",
      chessEngine: null,
    };
  },
  mounted() {
    this.onceAuthenticated();
  },
  methods: {
    onceAuthenticated() {
      var container = document.getElementById("board");
      this.chessEngine = new ChessEngine(container);
      
      this.color = this.chessEngine.orientation;
    },
    changeOrientation() {
      this.color = this.color === "white" ? "black" : "white";
      console.log(this.color);

      this.chessEngine.changeOrientation(this.color);
    },
    setPosition() {
      this.chessEngine.setPosition(fens[2]);
    },
    clearPosition() {
      this.chessEngine.setPosition();
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
