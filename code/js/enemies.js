function Enemy(game, pos) {
    Player.call(this, game);
    this.arrayImgs = ['img/sprite-enemy.png', 'img/sprite-enemy.png'];
    this.image.src = this.arrayImgs[pos];
    this.vel = Math.random() * (8 - 1) + 1;
    this.positions = [[50*9,350], [50, 400]];
    this.x = this.positions[pos][1];
    this.y = this.positions[pos][0] - (this.h  - this.anchory);
    this.walkDir = true;
    this.walking = true;

}

Enemy.prototype = Object.create(Player.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.kill = function () {
    var px = game.player.x + game.player.anchorx;
    var py = game.player.y + game.player.anchory;
    var playerCell = getTheCell(px, py);
    var ex = this.x + this.anchorx;
    var ey = this.y + this.anchory;
    var enemyCell = getTheCell(ex, ey);
    if(playerCell.cellx === enemyCell.cellx && playerCell.celly === enemyCell.celly && game.player.alive) {
        this.game.player.receiveDamage();
    }
}

Enemy.prototype.update = function () {
    this.walk();
    this.animateSprite();
}

Enemy.prototype.walk = function() {
    this.walkAuto();
    this.checkBounds();
    this.animateSprite();
 }

Enemy.prototype.walkAuto = function () {
    if(Number.isInteger(game.frame / 100)) {
        this.updateSprite(this.walking);
        this.walkDir = !this.walkDir;
    }
    if(this.walkDir) {
        this.walkRight();
    } else {
        this.walkLeft();
    }
}

Enemy.prototype.remove = function () {
    this.alive = false;
}