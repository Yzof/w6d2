class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  makeMove($square) {
    let number = $square.data("number");
    let pos = [Math.floor(number / 3), number % 3];
    try {
      let mark = this.game.currentPlayer;
      this.game.playMove(pos);
      $square.attr("id", mark);
      $square.text(mark.toUpperCase());
    } catch (MoveError) {
      alert("Invalid Move");
    }
    if (this.game.isOver()) {
      let winner = this.game.winner();
      if (winner) {
        alert("The Winner is: " + winner.toUpperCase());
      } else {
        alert("The Game is a Draw");
      }
    }
  }

  bindEvents() {
    this.$el.on("click", event => {
      let $square = $(event.target);
      this.makeMove($square);
    });
  }

  setupBoard() {
    let grid = $("<ul></ul>");
    grid.addClass("grid");
    for (var i = 0; i < 9; i++) {
      let gridEl = $("<li></li>");
      gridEl.addClass("gridEl");
      gridEl.data("number", i);
      grid.append(gridEl);
    }

    this.$el.append(grid);
  }
}

module.exports = View;
