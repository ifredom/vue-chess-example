var reverseArray = function(array) {
  return array.slice().reverse();
};

var pawnEvalWhite = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
  [1.0, 1.0, 2.0, 3.0, 3.0, 2.0, 1.0, 1.0],
  [0.5, 0.5, 1.0, 2.5, 2.5, 1.0, 0.5, 0.5],
  [0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0],
  [0.5, -0.5, -1.0, 0.0, 0.0, -1.0, -0.5, 0.5],
  [0.5, 1.0, 1.0, -2.0, -2.0, 1.0, 1.0, 0.5],
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
];

var pawnEvalBlack = reverseArray(pawnEvalWhite);

var knightEval = [
  [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
  [-4.0, -2.0, 0.0, 0.0, 0.0, 0.0, -2.0, -4.0],
  [-3.0, 0.0, 1.0, 1.5, 1.5, 1.0, 0.0, -3.0],
  [-3.0, 0.5, 1.5, 2.0, 2.0, 1.5, 0.5, -3.0],
  [-3.0, 0.0, 1.5, 2.0, 2.0, 1.5, 0.0, -3.0],
  [-3.0, 0.5, 1.0, 1.5, 1.5, 1.0, 0.5, -3.0],
  [-4.0, -2.0, 0.0, 0.5, 0.5, 0.0, -2.0, -4.0],
  [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
];

var bishopEvalWhite = [
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
  [-1.0, 0.0, 0.5, 1.0, 1.0, 0.5, 0.0, -1.0],
  [-1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 0.5, -1.0],
  [-1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, -1.0],
  [-1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0],
  [-1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, -1.0],
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
];

var bishopEvalBlack = reverseArray(bishopEvalWhite);

var rookEvalWhite = [
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5],
  [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
  [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
  [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
  [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
  [-0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.5],
  [0.0, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0],
];

var rookEvalBlack = reverseArray(rookEvalWhite);

var evalQueen = [
  [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
  [-1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0],
  [-1.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
  [-0.5, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
  [0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, -0.5],
  [-1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0, -1.0],
  [-1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, -1.0],
  [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
];

var kingEvalWhite = [
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
  [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
  [2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0],
  [2.0, 3.0, 1.0, 0.0, 0.0, 1.0, 3.0, 2.0],
];

var kingEvalBlack = reverseArray(kingEvalWhite);

export default class ChessAi {
  constructor(game) {
    this.game = game;
    this.depth = 3; // 遍历深度， 1-5
  }

  /**
   *
   * * 生成最优piece
   */
  makeBestPieceMove() {
    // var bestMove = this.calculateBestMovefirstVersion(this.game); // 第一版
    var bestMove = this.minimaxRoot(this.depth, this.game, true); // 第二版
    return bestMove;
  }

  /**
   * @param { game } 
   * * 生成随机piece
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
   * * 1.初步算法
   * ? 生成所有可能移动的位置
   */
  calculateBestMovefirstVersion(game) {
    var newGameMoves = game.moves();
    console.log(newGameMoves);
    var bestMove = null;
    // 任何负数
    var bestValue = -9999;
    for (var i = 0; i < newGameMoves.length; i++) {
      var newGameMove = newGameMoves[i];
      game.move(newGameMove);

      // 当AI是黑子方时，用负值
      var boardValue = -this.evaluateBoard(game.board());
      game.undo();
      if (boardValue > bestValue) {
        bestValue = boardValue;
        bestMove = newGameMove;
      }
    }
    return bestMove;
  }

  evaluateBoard(board) {
    var totalEvaluation = 0;
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        totalEvaluation =
          totalEvaluation + this.getPieceValue(board[i][j], i, j);
      }
    }
    return totalEvaluation;
  }

  getPieceValue(piece, x, y) {
    if (piece === null) {
      return 0;
    }
    var getAbsoluteValue = function(piece, isWhite, x, y) {
      if (piece.type === "p") {
        return 10 + (isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x]);
      } else if (piece.type === "r") {
        return 50 + (isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x]);
      } else if (piece.type === "n") {
        return 30 + knightEval[y][x];
      } else if (piece.type === "b") {
        return 30 + (isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x]);
      } else if (piece.type === "q") {
        return 90 + evalQueen[y][x];
      } else if (piece.type === "k") {
        return 900 + (isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x]);
      }
      throw "Unknown piece type: " + piece.type;
    };

    var absoluteValue = getAbsoluteValue(piece, piece.color === "w", x, y);
    return piece.color === "w" ? absoluteValue : -absoluteValue;
  }

  /**
   *
   * * 2.第二阶段
   * ? 生成所有可能移动的位置
   */
  minimaxRoot(depth, game, isMaximisingPlayer) {
    var newGameMoves = game.moves();
    var bestMove = -9999;
    var bestMoveFound;
    for (var i = 0; i < newGameMoves.length; i++) {
      var newGameMove = newGameMoves[i];
      game.move(newGameMove);
      var value = this.minimax(
        depth - 1,
        game,
        -10000,
        10000,
        !isMaximisingPlayer
      );
      game.undo();
      if (value >= bestMove) {
        bestMove = value;
        bestMoveFound = newGameMove;
      }
    }
    return bestMoveFound;
  }

  minimax(depth, game, alpha, beta, isMaximisingPlayer) {
    if (depth === 0) {
      return -this.evaluateBoard(game.board());
    }

    var newGameMoves = game.moves();

    if (isMaximisingPlayer) {
      var bestMove = -9999;
      for (var i = 0; i < newGameMoves.length; i++) {
        game.move(newGameMoves[i]);
        bestMove = Math.max(
          bestMove,
          this.minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer)
        );
        game.undo();
        alpha = Math.max(alpha, bestMove);
        if (beta <= alpha) {
          return bestMove;
        }
      }
      return bestMove;
    } else {
      var bestMove = 9999;
      for (var i = 0; i < newGameMoves.length; i++) {
        game.move(newGameMoves[i]);
        bestMove = Math.min(
          bestMove,
          this.minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer)
        );
        game.undo();
        beta = Math.min(beta, bestMove);
        if (beta <= alpha) {
          return bestMove;
        }
      }
      return bestMove;
    }
  }
}
