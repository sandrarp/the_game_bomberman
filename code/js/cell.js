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

Cell.prototype.draw = function () {
    this.game.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
}

Cell.prototype.update = function () {

}

function Block(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/board-block.jpg';
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
    this.state = 0;
}

Bomb.prototype = Object.create(Cell.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.draw = function () {
    if (this.state === 0) {
        this.game.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } else {
        this.game.ctx.drawImage(this.explosion, this.x - (this.w * this.damage), this.y - (this.h * this.damage), this.w * ((this.damage * 2) + 1), this.h * ((this.damage * 2) + 1));
    }
}

Bomb.prototype.explode = function () {
    var that = this;
    this.state = 1;
    var int = setInterval(function () {
        console.log("explotando");
    }, 10);
    setTimeout(function () {
        console.log("EXPLOTADO");
        clearInterval(int);
        console.log("XY:  " + that.cellx + ", " + that.celly);
        that.destroy();
        that.game.board.varElements[that.celly][that.cellx] = undefined;
    }, that.explosionDuration);
}

Bomb.prototype.destroy = function () {
    var repeatTimes = this.damage * 2 + 1;
    for (var i = 0; i < repeatTimes; i++) {
        var cellIndex = i - this.damage;
        var objX = getTheCell(this.cellx + cellIndex, this.celly, "index", "all");
        var objY = getTheCell(this.cellx, this.celly + cellIndex, "index", "all");
        if(objX.constructor.name == "Wall" || objY.constructor.name == "Wall") {
            this.game.board.varElements[objX.celly][objX.cellx] = undefined;
            this.game.board.varElements[objY.celly][objY.cellx] = undefined;
        }
        // this.game.board.varElements[this.cellx][this.celly + cellIndex] = undefined;
    }
}


function Wall(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/wall.jpg';
}

Wall.prototype = Object.create(Cell.prototype);
Wall.prototype.constructor = Wall;