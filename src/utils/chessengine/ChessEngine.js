import Chess from "chess.js";
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR,
  BORDER_TYPE,
  PIECE,
} from "cm-chessboard";
import Handle from "./handel";
export default class ChessEngine {
  constructor(el) {
    this.$el = el;
    this.game = null;
    this.board = null;
    this.fen = "start";
    this.history = [];
    this.orientation = COLOR.white;
    this.turn = "w";
    // 任意走步
    this.limitMove = false;
    this.handel = null;

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
      // orientation: COLOR.white,
      // moveInputMode: MOVE_INPUT_MODE.dragPiece,  // 废弃属性
      responsive: true,
      style: {
        cssClass: "chess-club",
        // borderType: BORDER_TYPE.frame,
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
    // 棋盘点击事件
    this.board.enableBoardClick((event) => {
      console.log("boardClick board", event);
    });
    // 移动事件
    this.board.enableMoveInput((event) => {
      switch (event.type) {
        case INPUT_EVENT_TYPE.moveStart:
          return true;
        case INPUT_EVENT_TYPE.moveDone:
          // console.log(event);
          // console.log(`moveStart: ${event.square}`);

          const turn = this.game.turn();

          if (turn === "w") {
            const move = this.game.move({
              from: event.squareFrom,
              to: event.squareTo,
              promotion: "q",
            });
            // console.log(this.game);
            // console.log(this.game.turn());
            // console.log(move);
            // console.log(this.board.getPiece());

            if (move === null) return;
            this.fen = this.game.fen();
            this.history = this.game.history({ verbose: true });
            setTimeout(() => {
              event.chessboard.setPosition(this.game.fen());
            });

            var bestPiece = this.calculateBestMove(this.game);
            console.log(bestPiece);
            this.makeMove();
          } else {
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

  moveStart(piece) {
    if (
      this.game.in_checkmate() === true ||
      this.game.in_draw() === true ||
      piece.search(/^b/) !== -1
    ) {
      return false;
    }
  }

  /**
   *
   * * 设置一个棋子
   */
  makePieceMove(piece = "bn") {
    this.board.setPiece("e4", PIECE.blackKnight);
    this.board.setPiece("e4", piece);
  }
  /**
   *
   * * 生成随机步数
   */
  makeRandomPieceMove() {
    var possibleMoves = this.game.moves();
    // 游戏结束则退出
    if (this.game.game_over()) return;
    var randomIdx = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomIdx];
  }
  /**
   *
   * * 走一步棋
   */
  makeMove(bestPiece) {
    var randomPiece = bestPiece ? bestPiece : this.makeRandomPieceMove();
    this.game.move(randomPiece);
    this.board.setPosition(this.game.fen());
  }
  /**
   *
   * * 循环随机走棋
   */
  loopMakeMove() {
    var that = this;
    window.setTimeout(() => {
      that.makeMove();
    }, 500);
  }

  // 开发最佳下棋的算法
  calculateBestMove(game) {
    //generate all the moves for a given position
    var newGameMoves = game.moves();
    return newGameMoves[Math.floor(Math.random() * newGameMoves.length)];
  }
}
