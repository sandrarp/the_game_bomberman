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
      case 32:
        game.player.throwBomb();
        break;
    }
  }
  document.onkeyup = function(e) {
      if(e.keyCode !== 32) {
          game.player.stopWalk();
      }
  }