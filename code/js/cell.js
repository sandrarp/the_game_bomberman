function Cell(game, posx, posy) {
    this.game = game;
    this.posx = posx;
    this.posy = posy;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
}

Cell.prototype.draw = function() {

}

Cell.prototype.update = function() {

}

function Obstacle() {
    Cell.call(this, posx, posy);
}

Obstacle.prototype.receiveDamage = function() {

}

function Bomb() {
    Cell.call(this, posx, posy);
}

Obstacle.prototype.explode = function() {

}