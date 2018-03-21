class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (var i = 0; i < 3; i++) {
      let $tower = $("<ul></ul>");
      $tower.addClass("tower");
      $tower.data("id", i);
      this.$el.append($tower);
    }
  }

  render() {
    // console.log("LOAD!!!");
    let $towers = $(".tower");
    $towers.remove("li");
    // console.log($towers);

    for (var i = 0; i < 3; i++) {
      let tower = this.game.towers[i];
      // console.log(tower);

      for (var j = 0; j < tower.length; j++) {
        let blockNumber = tower[j];
        let $block = $("<li></li>");
        $block.addClass("block");
        $block.data("id", blockNumber);
        // console.log($block);
        let $target = $(`*[data-id=${i}]`);
        console.log($towers);
        console.log($target);
        // $target.append($block);
      }
    }
  }
}

module.exports = View;
