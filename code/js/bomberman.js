var game = new Bomberman();

function Bomberman() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.board = new Board(this);
    this.cellwidth = 50;
    this.player = new Player(this);
}

Bomberman.prototype.start = function() {
    this.board.defineCells();
    game.player.draw();
    requestAnimationFrame(loop);
}

Bomberman.prototype.newLevel = function() {

}

function loop() {
    game.board.draw();
    game.player.update();
    requestAnimationFrame(loop);
}
game.start();