function Bomberman() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.board = new Board(this);
    this.cellwidth = 50;
    this.player = new Player(this);
    this.enemies = [];
    this.music = new Music();
    this.frame = 0;
}

Bomberman.prototype.start = function() {
    this.board.defineCells();
    this.board.buildWalls();
    this.music.ambient.play();
    var enemy = new Enemy(this, 0);
    this.enemies.push(enemy);
    var enemy1 = new Enemy(this, 1);
    this.enemies.push(enemy1);
    updateCount("player", this.player.livesLeft);
    requestAnimationFrame(loop);
}

Bomberman.prototype.newLevel = function() {

}

Bomberman.prototype.win = function() {
    document.getElementById("game-win").classList.remove('hidden');
}

Bomberman.prototype.gameOver = function() {
    document.getElementById("game-over-screen").classList.remove('hidden');
}

function loop() {
    game.board.draw();
    game.board.drawLayerVarElements();
    game.player.update();
    if(game.enemies.length > 0) {
        for(var i = 0; i < game.enemies.length; i++) {
            if(game.enemies[i].alive) {
                game.enemies[i].update();
            } else {
                game.enemies.splice(i, 1);
            }
        }
    } else {
        game.win();
    }
    game.frame++;
    requestAnimationFrame(loop);
  }