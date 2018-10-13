function Player(game) {
    this.game = game;
    this.w = 50;
    this.h = 75;
    this.x = this.game.cell.w + vx;
    this.y = this.game.cell.y + vy;
    this.vx = 0;
    this.vy = 0;
    this.livesLeft = 3;
    this.image = new Image();
}

Player.prototype.draw = function() {
    var imgScale = 17/26;
    // myGameArea.ctx.drawImage(car, carX, carY,carW,carH);
}

Player.prototype.walk = function() {

}

Player.prototype.checkCollision = function() {

}

Player.prototype.throwBomb = function() {

}

Player.prototype.receiveDamage = function() {

}

