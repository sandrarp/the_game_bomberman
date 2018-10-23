function Cell(game, x, y) {
    this.game = game;
    this.w = game.cellwidth;
    this.h = game.cellwidth;
    this.x = this.w * x;
    this.y = this.h * y;
    this.cellx = x;
    this.celly = y;
    this.image = new Image();
    this.image.src = 'img/cell-04.jpg';
}

Cell.prototype.draw = function () {
    this.game.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
}

Cell.prototype.update = function () {

}

function Block(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/sprite-block.png';
}

Block.prototype = Object.create(Cell.prototype);
Block.prototype.constructor = Block;

Block.prototype.receiveDamage = function () {

}

function Bomb(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/board-bomb.jpg';
    this.explosion = new Image();
    this.explosion.src = 'img/explosion.png';
    this.explosionDuration = 900;
    this.damage = 2;
    this.explosionRange = [];
    this.state = 0;
}

Bomb.prototype = Object.create(Cell.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.draw = function () {
    console.log(this.game.ctx);

    if (this.state === 0) {
        this.game.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } else {
        this.game.ctx.drawImage(this.explosion, this.x - (this.w * this.damage), this.y - (this.h * this.damage), this.w * ((this.damage * 2) + 1), this.h * ((this.damage * 2) + 1));
    }
}

Bomb.prototype.explode = function () {
    var that = this;
    this.state = 1;
    this.calculateExplosionRange();
    var int = setInterval(function () {
        console.log("explotando");
        that.kill();
    }, 10);
    setTimeout(function () {
        console.log("EXPLOTADO");
        clearInterval(int);
        that.destroy();
        that.game.board.varElements[that.celly][that.cellx] = undefined;
    }, that.explosionDuration);
}

Bomb.prototype.calculateExplosionRange = function() {
    var repeatTimes = this.damage * 2 + 1;
    for (var i = 0; i < repeatTimes; i++) {
        var cellIndex = i - this.damage;
        if(i !== this.damage &&  this.cellx + cellIndex > 0) {
            this.explosionRange.push([this.cellx + cellIndex, this.celly]);
        }
        if(this.celly + cellIndex > 0) {
            this.explosionRange.push([this.cellx, this.celly + cellIndex]);
        }
    }
    console.log(this.explosionRange);
}

Bomb.prototype.destroy = function () {
    [].forEach.call(this.explosionRange, function(cell) {
        var obj = getTheCell(cell[0], cell[1], "index", "all");
        if(obj.constructor.name === "Wall") {
            this.game.board.varElements[obj.celly][obj.cellx] = undefined;
        }
    })
}

Bomb.prototype.kill = function() {
    var px = game.player.x + game.player.anchorx;
    var py = game.player.y + game.player.anchory;
    var playerCell = getTheCell(px, py);
    [].forEach.call(this.explosionRange, function(cell) {
        if(playerCell.cellx === cell[0] && playerCell.celly === cell[1] && game.player.alive) {
            this.game.player.receiveDamage();
        }
    })
}

function Wall(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/wall-02.jpg';
}

Wall.prototype = Object.create(Cell.prototype);
Wall.prototype.constructor = Wall;