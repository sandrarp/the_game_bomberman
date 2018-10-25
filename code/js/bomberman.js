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
    this.player.draw();
    this.enemy.draw();
    requestAnimationFrame(loop);
}

Bomberman.prototype.newLevel = function() {

}

Bomberman.prototype.gameOver = function() {

}

function loop() {
    game.board.draw();
    game.player.update();
    game.enemy.draw();
    game.enemy.update();
    game.frame++;
    requestAnimationFrame(loop);
  }