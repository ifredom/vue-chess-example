<template>
  <div class="chess">
    <chess-board
      position="start"
      orientation="black"
      draggable-pieces
    />
  </div>
</template>

<script>
// https://stackblitz.com/edit/react-chess-board?file=index.js
import  "chessboard-element";
export default {
  name: "ChessboardElement",
  components: {  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scope>
#chess-board {
  width: 400px;
}
</style>
