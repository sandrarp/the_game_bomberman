function Enemy(game, pos) {
    Player.call(this, game);
    this.image.src = 'img/sprite-enemy.png';
    this.positions = [[50*9,350]];
    this.initx = this.positions[pos][1];
    this.inity = this.positions[pos][0];
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
    console.log("Enemy " + this.x);
    this.walkAuto();
}

Enemy.prototype.walk = function() {
    this.walkAuto();
    this.animateSprite();
 }

Enemy.prototype.walkAuto = function () {
    console.log(this.walkDir);
    if(Number.isInteger(game.frame / 200)) {
        this.updateSprite(this.walking);
        this.walkDir = !this.walkDir;
    }
    if(this.walkDir) {
        this.walkRight();
    } else {
        this.walkLeft();
    }
}