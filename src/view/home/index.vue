<template>
  <div class="home">
    <chessboard></chessboard>
    <!-- <chessground></chessground> -->
    <!-- <cmchessboard :socket="socket"></cmchessboard> -->
  </div>
</template>

<script>
import chessboard from "../chessboardelement";
import chessground from "../chessground";
import cmchessboard from "../cmchessboard";

import {
  WebChessSocket
} from "@/utils/WebChessSocket";

// cmchessboard 参考 cankao-webchess-master项目
export default {
  name: "home",
  components: {
    chessboard,
    chessground,
    cmchessboard,
  },
  data() {
    return {
      socket: null,
    };
  },
  created() {
    this.authenticate();
  },
  methods: {
    authenticate() {
      const token = "ifredom"
      this.socket = new WebChessSocket(token);
    },
  },
};
</script>
