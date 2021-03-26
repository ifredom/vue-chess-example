<template>
  <div class="chessground">
    <chessboard
    ></chessboard>
    <!-- <button class="button is-light" @click="loadFen(fen)" v-for="fen in fens">
      {{ fen }}
    </button> -->
  </div>
</template>

<script>
// https://github.com/vitogit/vue-chessboard
import { chessboard } from "vue-chessboard";
import "vue-chessboard/dist/vue-chessboard.css";

export default {
  name: "ChessGround",
  components: {
    chessboard,
  },
  data() {
    return {
      fens:["5k2","ppp5","4P3","3R3p","6P1","1K2Nr2","PP3P2","8"]
    }
  },
  methods: {
    loadFen(fen){
      console.log(fen);
    }
  },
};
</script>
