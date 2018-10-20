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

Cell.prototype.draw = function() {
    this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
}

Cell.prototype.update = function() {
    this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
}

function Block(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/board-block.jpg';
}

Block.prototype = Object.create(Cell.prototype);
Block.prototype.constructor = Block;

Block.prototype.receiveDamage = function() {

}


function Bomb(game, x, y) {
    Cell.call(this, game, x, y);
    this.image.src = 'img/board-bomb.jpg';
    this.life = 2000;
    this.damage = 2;
}

Bomb.prototype = Object.create(Cell.prototype);
Bomb.prototype.constructor = Bomb;

Bomb.prototype.explode = function() {
    // var emptyCell = new Cell(this.game, this.celly, this.cellx);
    // game.board.cells[this.celly][this.cellx] = emptyCell;
    console.log(this.x, this.y);
    console.log("bum");
    var explosion = new Explosion(game, this.cellx, this.celly, this.celly, this.cellx, 0,0);
        game.board.cells[this.celly][this.cellx] = explosion;
        explosion.expand();
    console.log(game.board.cells);
}

function Explosion(game, x, y, indexx, indexy, expIndexX, expIndexY) {
    Cell.call(this, game, x, y);
    // this.image.src = 'img/explosion.png';
    this.image.src = 'img/explosion1x1.jpg';
    this.damage = 2;
    this.indexx = indexx;
    this.indexy = indexy;
    this.srcX = (expIndexX + this.damage)* this.w;
    this.srcY = (expIndexY + this.damage) * this.h;
    // this.sprite = new Sprite(this.image, srcX, srcY, 16, 16, this.x, this.y, this.w, this.h);
}

// Explosion.prototype.draw = function() {
//     console.log("draawin");
//     this.game.ctx.drawImage(this.image, game.cellwidth * (this.damage + this.indexx), game.cellwidth * (this.damage + this.indexy),this.w,this.h, this.x, this.y,this.w,this.h);
// }

Explosion.prototype = Object.create(Cell.prototype);
Explosion.prototype.constructor = Explosion;

Explosion.prototype.expand = function() {
    var allExplosions = [];
    for(var i = -(this.damage); i <= this.damage; i++) {
        var expansionX = new Explosion(game, this.indexx + i, this.indexy, this.indexy, this.indexx + i, i, 0);
        game.board.cells[this.indexx + i][this.indexy] = expansionX;
        var expansionY = new Explosion(game, this.indexx, this.indexy + i, this.indexy + i, this.indexx, 0, i);
        game.board.cells[this.indexx][this.indexy + i] = expansionY;
        expansionX.draw();
        expansionY.draw();
        console.log(expansionY);
    } 
}

Explosion.prototype.draw = function() {
    game.ctx.drawImage(this.image, this.y, this.x, this.w, this.h);
    // game.ctx.drawImage(this.image, this.srcX, this.srcY, 16, 16, this.x, this.y, this.w, this.h);
    // console.log(this.image, this.srcX, this.srcY, 16, 16, this.x, this.y, this.w, this.h);
    var that = this;
    setTimeout(function() {
        // that.remove();
    }, 1500);
}

Explosion.prototype.remove = function(object) {
    if(this !== undefined){
        var emptyCell = new Cell(this.game, this.cellx, this.celly);
        game.board.cells[this.celly][this.cellx] = emptyCell;
    }
}