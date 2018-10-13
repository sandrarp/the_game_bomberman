function Player(game) {
    this.game = game;
    this.w = 50;
    this.h = 75;
    this.vx = 0;
    this.vy = 0;
    this.x = this.game.cellwidth + this.vx;
    this.y = this.game.cellwidth + this.vy;
    this.livesLeft = 3;
    this.image = new Image();
    this.image.src = 'img/player.png';
}

Player.prototype.draw = function() {
    // var imgScale = 17/26;
    this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.y);
}

Player.prototype.walk = function() {

}

Player.prototype.checkCollision = function() {

}

Player.prototype.throwBomb = function() {

}

Player.prototype.receiveDamage = function() {

}

