document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
        game.player.walkUp();
        break;
      case 40:
        game.player.walkDown();
        break;
      case 37:
        game.player.walkLeft();
        break;
      case 39:
        game.player.walkRight();
        break;
    }
  }
  document.onkeyup = function(e) {
    game.player.stopWalk();
  }