# [cm-chessboard](https://github.com/shaack/cm-chessboard)

一个轻量级的、基于ES6模块的、响应迅速的SVG棋盘，几乎没有外部依赖关系。

## 使用

```vue
<template>
  <div>
    <h3>Playing {{ color == "w" ? "white" : "black" }}</h3>
    <div ref="board" id="board"></div>
  </div>
</template>

<script>
import "cm-chessboard/styles/cm-chessboard.css";
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR,
} from "cm-chessboard";
</script>
```

```js
import Chess from "chess.js";

methods:{
init() {
  this.game = new Chess();

  this.board = new Chessboard(document.getElementById("board"), {
    position: this.game.fen(),
    style: { aspectRatio: 0.3 },
    orientation: COLOR.white,
    moveInputMode: MOVE_INPUT_MODE.dragPiece,
    responsive: true,
    sprite: {
      url: "./chessboard-sprite.svg", // pieces and markers are stored as svg in the sprite
      grid: 40, // the sprite is tiled with one piece every 40px
    },
  });
}
}

```
