function Bomberman() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.board = new Board(this);
    this.cellwidth = 50;
    this.player = new Player(this);
    this.enemy = new Enemy(this, 0);
    this.frame = 0;
}

Bomberman.prototype.start = function() {
    this.board.defineCells();
    this.board.buildWalls();
    updateCount("player", this.player.livesLeft);
    requestAnimationFrame(loop);
}

Bomberman.prototype.newLevel = function() {

}

Bomberman.prototype.gameOver = function() {
    document.getElementById("game-over-screen").classList.remove('hidden');
}

function loop() {
    game.board.draw();
    game.player.update();
     game.enemy.update();
    game.frame++;
    requestAnimationFrame(loop);
  }