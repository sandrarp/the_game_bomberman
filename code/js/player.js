function Player(game) {
    this.game = game;
    this.w = 50;
    this.h = 75;
    this.vx = 0;
    this.vy = 0;
    this.initx = this.game.cellwidth + this.vx;
    this.inity = this.game.cellwidth + this.vy - 30;
    this.x = this.initx;
    this.y = this.inity + this.vy;
    this.livesLeft = 3;
    this.image = new Image();
    this.image.src = 'img/player.png';
}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(this.image, this.initx, this.inity,this.w,this.h);
    console.log(this);
}

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
    this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
}

Player.prototype.walkUp = function() {
    this.y -= 10;
}

Player.prototype.walkDown = function() {
    this.y += 10;
}

Player.prototype.walkRight = function() {
    this.x += 10;
}

Player.prototype.walkLeft = function() {
    this.x -= 10;
}

Player.prototype.stopWalk = function() {
    this.vx = 0;
    this.vy = 0;
}

Player.prototype.checkCollision = function() {

}

Player.prototype.throwBomb = function() {

}

Player.prototype.receiveDamage = function() {

}

