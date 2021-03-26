<template>
  <div>
    <h3>Playing {{ color == "w" ? "white" : "black" }}</h3>
    <div id="time"></div>
    <button @click="changeOrientation">改变黑白</button>
    <button @click="clearPosition">清除</button>
    <button @click="setPosition">设置 fen</button>
    <button @click="makeRandomMove">随机移动</button>
    <div ref="board" id="board"></div>

    <ChessHistory :history="history" />
  </div>
</template>

<script>
import "cm-chessboard/styles/cm-chessboard.css";
import { COLOR, INPUT_EVENT_TYPE } from "cm-chessboard";
import {
  WebChessSocket,
  SocketEmitMessage,
  SocketReceiveMessage,
} from "@/utils/WebChessSocket";
import ChessHistory from "@/components/ChessHistory";
import { ChessEngine } from "@/utils/chessengine";
import { fens } from "@/utils/fens";
export default {
  name: "cmchessboardmove",
  components: { ChessHistory },
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
      color: "white",
      chessEngine: null,
      history: [],
    };
  },
  mounted() {
    this.initMounted();
  },
  methods: {
    // https://jsfiddle.net/Laa0p1mh/3/ 制作AI
    async initMounted() {
      var that = this;
      var container = document.getElementById("board");
      this.chessEngine = await new ChessEngine(container);

      this.chessEngine.event.on("history", (data) => {
        console.log(data);
        that.history = data;
      });
    },
    changeOrientation() {
      this.color = this.chessEngine.board.getOrientation();
      this.chessEngine.changeOrientation(this.color);
    },
    setPosition() {
      this.chessEngine.setPosition(fens[2]);
    },
    clearPosition() {
      this.chessEngine.setPosition();
    },
    makeRandomMove() {
      this.chessEngine.loopMakeMove();
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
