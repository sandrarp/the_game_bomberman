var btnStart = document.getElementById('start-btn');
var game;

/* btnStart.onclick = function(e) {
  game = new Bomberman();
  game.start();
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById("game-over-screen").classList.add('hidden');
} */
var btns = document.getElementsByClassName("btn-start");


for(var i = 0; i < btns.length; i++) {
  btns[i].onclick = function(e) {
    game = new Bomberman();
    game.start();
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById("game-over-screen").classList.add('hidden');
    
  }
}

var keymap = {
  up: false,
  down: false,
  left: false,
  right: false,
}
window.onload = function() {

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
        keymap.up = true;
        break;
      case 40:
        keymap.down = true;
        break;
      case 37:
        keymap.left = true;
        break;
      case 39:
        keymap.right = true;
        break;
    }
    if(e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 37 || e.keyCode == 39) {
      game.player.walking = true;
    }
  }
  document.onkeyup = function(e) {
      switch (e.keyCode) {
        case 38:
          keymap.up = false;
          break;
        case 40:
          keymap.down = false;
          break;
        case 37:
          keymap.left = false;
          break;
        case 39:
          keymap.right = false;
          break;
        case 32:
          game.player.throwBomb();
          break;
      }
      if(!keymap.down && !keymap.up && !keymap.right && !keymap.leftdown && game) game.player.walking = false;
  }
}