var increment;
var trackDown = 0;
var trackLeft = 1;
var trackRight = 2;
var trackUp = 3;

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
    this.image.src = 'img/sprite-3.png';
    this.spriteSheetWidth = 54;
    this.spriteSheetHeight = 120;
    this.spriteSrcX = 0;
    this.spriteSrcY = 0;
    this.spriteCols = 3;
    this.spriteRows = 4;
    this.spriteWidth = this.spriteSheetWidth / this.spriteCols; 
    this.spriteHeight = this.spriteSheetHeight / this.spriteRows;
    this.spriteCurrentFrame = 0;
    this.walking = false;
    this.trackDir = trackDown;
}

Player.prototype.draw = function() {
    this.game.ctx.drawImage(this.image, this.initx, this.inity,this.w,this.h);
    console.log(this);
}

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
    // this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
    this.checkBounds();
    this.animateSprite();
}

Player.prototype.updateSprite = function(isWalking) {
    switch(this.spriteCurrentFrame) {
        case 0:
            increment = 1;
            break;
        case (this.spriteCols-1): 
            increment = -1;
            break;
        default:
            break;
    }
    // spriteCurrentFrame = ++spriteCurrentFrame % cols; // 1, 2, 3, 4 y 1, 2, 3, 4
    if(isWalking === true) {
        this.spriteCurrentFrame = increment + this.spriteCurrentFrame; // 0, 1, 2, 1, 0, 1, 2, 1
    } else {
        this.spriteCurrentFrame = 1;
    }

    this.spriteSrcX = this.spriteCurrentFrame * this.spriteWidth;
    this.spriteSrcY = this.trackDir * this.spriteHeight;
}

Player.prototype.animateSprite = function() {
    if(Number.isInteger(game.frame / 10)) {
        this.updateSprite(this.walking);
    }
    this.game.ctx.drawImage(this.image, this.spriteSrcX, this.spriteSrcY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.w, this.h);
}

Player.prototype.walkUp = function() {
    this.trackDir = trackUp;
    this.y -= 10;
}

Player.prototype.walkDown = function() {
    this.trackDir = trackDown;
    this.y += 10;
}

Player.prototype.walkRight = function() {
    this.trackDir = trackRight;
    this.x += 10;
}

Player.prototype.walkLeft = function() {
    this.trackDir = trackLeft;
    this.x -= 10;
}

Player.prototype.stopWalk = function() {
    this.vx = 0;
    this.vy = 0;
}

Player.prototype.checkBounds = function() {
    var leftCell = getTheCell(this.x, this.y + this.anchory, "undefined", "all");
    var rightCell = getTheCell(this.x + this.w - 10, this.y + this.anchory, "undefined", "all");
    var topCell = getTheCell(this.x + this.anchorx, this.y + this.anchory, "all");
    var bottomCell = getTheCell(this.x + this.anchorx, this.y + this.h, "undefined", "all");
    
    if(leftCell.constructor.name == "Block" || leftCell.constructor.name == "Wall") {
        this.x = this.x + 5;
    }
    if(rightCell.constructor.name == "Block" || rightCell.constructor.name == "Wall") {
        this.x = this.x - 5;
    }

    if(topCell.constructor.name == "Block" || topCell.constructor.name == "Wall") {
        this.y = this.y + 10;
    }
    if(bottomCell.constructor.name == "Block" || bottomCell.constructor.name == "Wall") {
        this.y = this.y - 10;
    }
}

Player.prototype.throwBomb = function() {
    var cell = getTheCell(this.x + 25, this.y + 50);
    console.log(cell);
    var bomb = new Bomb(this.game, cell.cellx, cell.celly);
    game.board.varElements[cell.celly][cell.cellx] = bomb;
    console.log(game.board.varElements);
    // setTimeout(bomb.explode(), 2000);
}

Player.prototype.receiveDamage = function() {

}

function getTheCell(x, y, type, layer) {
    var cellx = Math.floor(x/game.cellwidth);
    var celly = Math.floor(y/game.cellwidth);
    if(type === "index") { // si le paso el parámetro layer = "index", la x y la y que le paso son los index de la baldosa
        cellx = x;
        celly = y;
    }
    if(layer === "varElements") {
        return game.board.varElements[celly][cellx];
    } 
    if(layer === "all") {
        if(game.board.varElements[celly][cellx] != undefined || game.board.varElements[celly][cellx] != null) {
            console.log("Aqui hay un" + game.board.varElements[celly][cellx]);
            return game.board.varElements[celly][cellx];
        }
    }
    return game.board.cells[celly][cellx];
}