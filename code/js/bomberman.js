var game = new Bomberman();

function Bomberman() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 750;
    this.canvas.height = 550;
    this.board = new Board(this);
    // this.player = new Player(this);
}

Bomberman.prototype.start = function() {
    this.canvas.width = 750;
    this.canvas.height = 550;
    this.ctx = this.canvas.getContext("2d");
    document.getElementById("game-board").appendChild(this.canvas);
    this.board.defineCells();
}

Bomberman.prototype.newLevel = function() {

}


game.start();