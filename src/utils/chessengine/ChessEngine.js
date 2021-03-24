import Chess from "chess.js";
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR,
  BORDER_TYPE
} from "cm-chessboard";

export default class ChessEngine {
  constructor(el) {
    this.$el = el;
    this.game = null;
    this.board = null;
    this.fen = "start";
    this.history = [];
    this.orientation = COLOR.white;
    // 任意走步
    this.limitMove = false;

    this.initChessGame();
    this.init(el);
  }

  init(el) {
    this.board = new Chessboard(el, {
      position: this.game.fen(),
      sprite: {
        url: "./chessboard-sprite-staunty.svg", // 片段和标记作为svg存储在sprite中
        grid: 40, // 每一个棋子的尺寸
      },
      orientation: COLOR.white,
      moveInputMode: MOVE_INPUT_MODE.dragPiece,
      responsive: true,
      style: {
        cssClass: "chess-club",
        borderType: BORDER_TYPE.frame,
        aspectRatio: 0.9,
      },
      // animationDuration: 300,
    });
    console.log(this.board);

    this.board.enableContextInput((event) => {
      console.log(event);
      const markersOnSquare = this.board.getMarkers(
        event.square,
        MARKER_TYPE.emphasize
      );
      if (markersOnSquare.length > 0) {
        this.board.removeMarkers(event.square, MARKER_TYPE.emphasize);
      } else {
        this.board.addMarker(event.square);
      }
    });
    this.enableBoardClick(this.board);
    this.board.enableMoveInput((event) => {
      switch (event.type) {
        case INPUT_EVENT_TYPE.moveStart:
          return true;
        case INPUT_EVENT_TYPE.moveDone:
          if (!this.getLimitMove()) {
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
          }
          return true;
        case INPUT_EVENT_TYPE.moveCanceled:
          return null;
      }
    });
  }

  /**
   *
   * * 限制移动 ： 是否可以任意走步
   */
  getLimitMove() {
    return this.limitMove;
  }

  initChessGame() {
    this.game = new Chess();
  }
  /**
   *
   * @param { black | white } mode
   * * 模式设置： 黑子在下 或者 白子在下
   */
  changeOrientation(orientation = "black") {
    console.log(orientation);
    this.board.setOrientation(orientation);
  }

  /**
   *
   * @param { fen字符串 } fen
   * * 初始棋局设置
   */
  setPosition(fen = "empty") {
    this.board.setPosition(fen);
  }
  /**
   *
   * @param { fen字符串 } fen
   * * 初始棋局设置
   */
  onPrimaryInput(event) {
    console.log(event);
  }
  /**
   *
   * @param { fen字符串 } fen
   * * 初始棋局设置
   */
  enableBoardClick(board) {
    board.enableBoardClick((event) => {
      console.log("boardClick board", event);
    });
  }

  // 开发最佳下棋的算法
  calculateBestMove(game) {
    //generate all the moves for a given position
    var newGameMoves = game.ugly_moves();
    return newGameMoves[Math.floor(Math.random() * newGameMoves.length)];
  }
}
