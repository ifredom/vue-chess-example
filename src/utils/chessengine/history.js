import {
  ChessRender,
  COLOR,
} from "cm-chessboard";
export default class History {
  constructor(chessConsole) {

    this.element = document.createElement("div");
    this.element.setAttribute("class", "history");
    document.boy.appendChild(this.element);

    this.state = chessConsole.state;
    this.redraw();
  }

  redraw() {
    window.clearTimeout(this.redrawDebounce);
    this.redrawDebounce = setTimeout(() => {
      const history = this.state.chess.history();
      let sanWhite;
      let sanBlack;
      let output = "";
      let i;
      let rowClass = "";
      let whiteClass = "";
      let blackClass = "";
      for (i = 0; i < history.length; i += 2) {
        const moveWhite = history[i];
        if (moveWhite) {
          sanWhite = ChessRender.san(
            moveWhite.san,
            COLOR.white,
            this.chessConsole.i18n.lang,
            this.chessConsole.props.notationType,
            this.chessConsole.props.figures
          );
        }
        const moveBlack = history[i + 1];
        if (moveBlack) {
          sanBlack = ChessRender.san(
            moveBlack.san,
            COLOR.black,
            this.chessConsole.i18n.lang,
            this.chessConsole.props.notationType,
            this.chessConsole.props.figures
          );
        } else {
          sanBlack = "";
        }
        if (this.state.plyViewed < i + 1) {
          rowClass = "text-muted";
          whiteClass = "text-muted";
        }
        if (this.state.plyViewed < i + 2) {
          blackClass = "text-muted";
        }
        output +=
          "<tr><td class='num " +
          rowClass +
          "'>" +
          (i / 2 + 1) +
          ".</td><td data-ply='" +
          (i + 1) +
          "' class='ply " +
          whiteClass +
          " ply" +
          (i + 1) +
          "'>" +
          sanWhite +
          "</td><td data-ply='" +
          (i + 2) +
          "' class='ply " +
          blackClass +
          " ply" +
          (i + 2) +
          "'>" +
          sanBlack +
          "</td></tr>";
      }
      this.element.innerHTML = "<table>" + output + "</table>";
      if (this.state.plyViewed > 0) {
        const $ply = $(this.element).find(".ply" + this.state.plyViewed);
        if ($ply.position()) {
          this.element.scrollTop = 0;
          this.element.scrollTop = $ply.position().top - 68;
        }
      }
    });
  }
}
