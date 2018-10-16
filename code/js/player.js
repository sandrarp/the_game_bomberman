function Player(game) {
    this.game = game;
    this.w = 50;
    this.h = 75;
    this.anchorx = 25;
    this.anchory = 50;
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
    this.checkBounds();
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

Player.prototype.checkBounds = function() {
    var leftCell = getTheCell(this.x, this.y + this.anchory);
    var rightCell = getTheCell(this.x + this.w - 10, this.y + this.anchory);
    var topCell = getTheCell(this.x + this.anchorx, this.y + this.anchory);
    var bottomCell = getTheCell(this.x + this.anchorx, this.y + this.h);
    
    if(leftCell.constructor.name == "Block") {
        this.x = this.x + 5;
    }
    if(rightCell.constructor.name == "Block") {
        this.x = this.x - 5;
    }

    if(topCell.constructor.name == "Block") {
        this.y = this.y + 10;
    }
    if(bottomCell.constructor.name == "Block") {
        this.y = this.y - 10;
    }
}

Player.prototype.throwBomb = function() {
    var cellx = Math.floor((this.x+ 25)/game.cellwidth);
    var celly = Math.floor((this.y+50)/game.cellwidth);
    console.log(game.board.cells[cellx][celly]);
    console.log(game.board.cells[cellx][celly].constructor.name);
    var bomb = new Bomb(this.game, cellx, celly);
    game.board.cells[celly][cellx] = bomb;
    setTimeout(bomb.explode(), 2000);
}

Player.prototype.receiveDamage = function() {

}

function getTheCell(x, y) {
    var cellx = Math.floor(x/game.cellwidth);
    var celly = Math.floor(y/game.cellwidth);
    return game.board.cells[celly][cellx];
}