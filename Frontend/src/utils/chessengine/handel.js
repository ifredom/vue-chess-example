export default class Handle {
  // this.board.enableBoardClick((event) => {
  //   console.log("boardClick board", event);
  // });
  constructor(game) {
    this.game = game;
  }
  moveDone(source, target) {
    var move = this.game.move({
      from: source,
      to: target,
      promotion: "q",
    });

    removeGreySquares();
    if (move === null) {
      return "snapback";
    }

    renderMoveHistory(game.history());
    window.setTimeout(makeBestMove, 250);
  }
}
