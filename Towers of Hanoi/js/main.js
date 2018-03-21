const HanoiGame = require("./game.js");
const HanoiView = require("./hanoiView.js");

$(() => {
  const $rootEl = $(".hanoi");
  const game = new HanoiGame();
  console.log(game);
  new HanoiView(game, $rootEl);
});
