<template>
  <div class="home">
    <!-- <chessboard></chessboard> -->
    <!-- <chessground></chessground> -->
    <cmchessboard :socket="socket" :authenticated="authenticated" />
    <!-- <cmchessboardmove :socket="socket" :authenticated="authenticated" /> -->
    <!-- <stockfish :socket="socket" /> -->
  </div>
</template>

<script>
import chessboard from "../chessboardelement";
import chessground from "../chessground";
import cmchessboard from "../cmchessboard";
import cmchessboardmove from "../cmchessboardmove";
import stockfish from "../stockfish";

import { WebChessSocket } from "@/utils/WebChessSocket";

// cmchessboard 参考 cankao-webchess-master项目
export default {
  name: "home",
  components: {
    chessboard,
    chessground,
    cmchessboard,
    cmchessboardmove,
    stockfish
  },
  data() {
    return {
      authenticated: false,
      socket: null,
    };
  },
  created() {
    this.authenticate();
  },
  methods: {
    authenticate() {
      const token = "ifredom";
      this.socket = new WebChessSocket(token);
      console.log(this.socket);
    },
  },
};
</script>
