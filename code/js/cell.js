function Cell(game, x, y) {
    this.game = game;
    this.w = game.cellwidth;
    this.h = game.cellwidth;
    this.x = this.w * x;
    this.y = this.h * y;
    this.cellx = x;
    this.celly = y;
    this.image = new Image();
    this.image.src = 'img/board-empty.jpg';
}

Cell.prototype.draw = function() {
    this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
}

Cell.prototype.update = function() {

}

function Block(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/board-block.jpg';
}

Block.prototype = Object.create(Cell.prototype);
Block.prototype.constructor = Block;

Block.prototype.receiveDamage = function() {

}

function Bomb(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/board-bomb.jpg';
}

Bomb.prototype = Object.create(Cell.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.explode = function() {
    // var emptyCell = new Cell(this.game, this.celly, this.cellx);
    // game.board.cells[this.celly][this.cellx] = emptyCell;
}

function Wall() {
    Cell.call(this, game, x, y);
    this.image.src = 'img/wall.jpg';
}

Wall.prototype = Object.create(Cell.prototype);
Wall.prototype.constructor = Wall;