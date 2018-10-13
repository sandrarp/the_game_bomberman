function Player(game) {
    this.game = game;
    this.w = 50;
    this.h = 75;
    this.vx = 0;
    this.vy = 0;
    this.x = this.game.cellwidth + this.vx;
    this.y = this.game.cellwidth + this.vy - 30;
    this.livesLeft = 3;
    this.image = new Image();
    this.image.src = 'img/player.png';
}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(this.image, this.x + this.vx, this.y + this.vy,this.w,this.h);
}

Player.prototype.walkUp = function() {
    this.vy -= 10;
}

Player.prototype.walkDown = function() {
    this.vy += 10;
}

Player.prototype.walkRight = function() {
    this.vx += 10;
}

Player.prototype.walkLeft = function() {
    this.vx -= 10;
}

Player.prototype.checkCollision = function() {

}

Player.prototype.throwBomb = function() {

}

Player.prototype.receiveDamage = function() {

}

