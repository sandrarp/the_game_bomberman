function Cell(game, x, y) {
    this.game = game;
    this.w = 50;
    this.h = 50;
    this.x = this.w * x;
    this.y = this.h * y;
    this.image = new Image();
}

Cell.prototype.draw = function() {

}

Cell.prototype.update = function() {

}

function Block(game, x, y) {
    Cell.call(this, game, x, y);
}

Block.prototype.receiveDamage = function() {

}

function Bomb(game, x, y) {
    Cell.call(this, game, x, y);
}

Bomb.prototype.explode = function() {

}