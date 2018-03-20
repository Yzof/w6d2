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
    } catch (MoveError) {
      alert("Invalid Move");
    }
  }

  bindEvents() {
    this.$el.on("click", event => {
      let $square = $(event.target);
      // console.log(this instanceof View);
      // console.log(this.__proto__);
      // console.log(this.prototype);
      // console.log($square);
      // console.log(this.$el);
      // console.log($square instanceof HTMLElement)
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
