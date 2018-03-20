const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../nodeSoln/game.js"); // require appropriate file

$(() => {
  const game = new Game();
  const board = $(".ttt");
  const view = new View(game, board);
  // view.setupBoard();
  const $square = view.bindEvents();
});
