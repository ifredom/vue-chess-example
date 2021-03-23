<template>
  <div class="chess">
    <div>npm包 chessboard-element 页面</div>
    <chess-board position="start" orientation="black" draggable-pieces />
  </div>
</template>

<script>
// https://stackblitz.com/edit/react-chess-board?file=index.js
import ChessBoard from "chessboard-element";
export default {
  components: { ChessBoard },
  data() {
    return {};
  },
  mounted() {
    // var board = Chessboard("myBoard");
  },
  methods: {},
};
</script>

<style lang="less" scope>
#chess-board {
  width: 400px;
}
</style>
