import Chess from "chess.js";
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR,
  BORDER_TYPE,
  PIECE,
} from "cm-chessboard";
// import History from "./history";
import Handle from "./handel";
import ChessAi from "./ai";
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
    this.instance = null;

    this.game = new Chess();
    this.chessAi = null;

    this.init(el);
  }

  init(el) {
    var that = this;
    this.board = new Chessboard(el, {
      position: this.game.fen(),
      sprite: {
        url: "./chessboard-sprite-staunty.svg", // 片段和标记作为svg存储在sprite中
        grid: 40, // 每一个棋子的尺寸
      },
      // responsive: true,
      // style: {
      //   cssClass: "chess-club",
      //   borderType: BORDER_TYPE.frame,
      //   aspectRatio: 0.9,
      // },
      // animationDuration: 300,
    });

    this.board.enableContextInput((event) => {
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
    var chessAi = (this.chessAi = new ChessAi(this.game, this.board));

    this.board.enableBoardClick((event) => {
      console.log("boardClick board", event);
    });

    this.board.enableMoveInput((event) => {
      switch (event.type) {
        case INPUT_EVENT_TYPE.moveStart:
          this.moveStart(this.game, event.square);
          return true;
        case INPUT_EVENT_TYPE.moveDone:
          const turn = this.game.turn();

          if (turn === "w") {
            const move = this.game.move({
              from: event.squareFrom,
              to: event.squareTo,
              promotion: "q",
            });

            if (move === null) return;
            this.fen = this.game.fen();
            this.history = this.game.history({ verbose: true });

            var d = new Date().getTime();
            console.log("here1");
            var bestPiece = chessAi.makeBestPieceMove();
            // var randomPiece = chessAi.makeRandomPieceMove(); // 生成随机步数
            var d2 = new Date().getTime();

            var aiMoveTime = d2 - d; // AI用时
            console.log(aiMoveTime);

            this.makeMove(bestPiece);

            // setTimeout(() => {
            // that.makeMove(bestPiece);
            // event.chessboard.setPosition(this.game.fen());
            // }, 250);
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

  moveStart(game, piece) {
    if (
      game.in_checkmate() === true ||
      game.in_draw() === true ||
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
   * * 移动一步棋子
   */
  makeMove(piece) {
    this.game.move(piece);
    this.board.setPosition(this.game.fen());
    // this.renderMoveHistory(this.game.history());
  }
  /**
   *
   * * 循环随机走棋
   */
  loopMakeMove() {
    var that = this;
    window.setInterval(() => {
      var randomPiece = that.chessAi.makeRandomPieceMove();
      that.makeMove(randomPiece);
    }, 500);
  }

  renderMoveHistory(history) {
    return history;
  }
}
