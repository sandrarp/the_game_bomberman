var increment;
var trackDown = 0;
var trackLeft = 1;
var trackRight = 2;
var trackUp = 3;
var trackDeath = 4;

function Player(game) {
    this.game = game;
    this.w = 50;
    this.h = 75;
    this.anchorx = 25;
    this.anchory = 50;
    this.initx = this.game.cellwidth;
    this.inity = this.game.cellwidth- 30;
    this.x = this.initx;
    this.y = this.inity;
    this.vel = 3 + this.game.level;
    this.livesLeft = 3;
    this.image = new Image();
    this.image.src = 'img/sprite-player-hd.png'; // sprite-3.png sprite-player-hd.png
    this.death = new Image();
    this.death.src = 'img/player-death-hd.png';
    this.spriteSheetWidth = 217; // 54 217
    this.spriteSheetHeight = 481; // 120 481
    this.spriteSrcX = 0;
    this.spriteSrcY = 0;
    this.spriteCols = 3;
    this.spriteRows = 4;
    this.spriteWidth = this.spriteSheetWidth / this.spriteCols; 
    this.spriteHeight = this.spriteSheetHeight / this.spriteRows;
    this.spriteCurrentFrame = 0;
    this.walking = false;
    this.alive = true;
    this.trackDir = trackDown;
}

// Player.prototype.draw = function() {
//     this.game.ctx.drawImage(this.image, this.initx, this.inity,this.w,this.h);
//     console.log(this);
// }

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
    // this.game.ctx.drawImage(this.image, this.x, this.y,this.w,this.h);
    this.walk();
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
    if(this.alive) {
        this.game.ctx.drawImage(this.image, this.spriteSrcX, this.spriteSrcY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.w, this.h);
    } else {
        this.game.ctx.drawImage(this.death, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.w, this.h);
    }
}

Player.prototype.walk = function() {
   if(this.alive) {
        if(keymap.up) this.walkUp();
        if(keymap.down) this.walkDown();
        if(keymap.left) this.walkLeft();
        if(keymap.right) this.walkRight();
        if(keymap.up || keymap.down || keymap.left ||keymap.right) {
            if(Number.isInteger(game.frame / 10)) this.updateSprite(this.walking);
        }
    }
}

Player.prototype.walkUp = function() {
    this.trackDir = trackUp;
    this.y -= this.vel;
}

Player.prototype.walkDown = function() {
    this.trackDir = trackDown;
    this.y += this.vel;
}

Player.prototype.walkRight = function() {
    this.trackDir = trackRight;
    this.x += this.vel;
}

Player.prototype.walkLeft = function() {
    this.trackDir = trackLeft;
    this.x -= this.vel;
}

Player.prototype.checkBounds = function() {
    var leftCell = getTheCell(this.x, this.y + this.anchory, "undefined", "all");
    var rightCell = getTheCell(this.x + this.w - 10, this.y + this.anchory, "undefined", "all");
    var topCell = getTheCell(this.x + this.anchorx, this.y + this.anchory, "all");
    var bottomCell = getTheCell(this.x + this.anchorx, this.y + this.h, "undefined", "all");
    var blockPos = undefined;
    
    if(leftCell.constructor.name == "Block" || leftCell.constructor.name == "Wall") {
        this.x = this.x + this.vel;
        blockPos = "left";
    }
    if(rightCell.constructor.name == "Block" || rightCell.constructor.name == "Wall") {
        this.x = this.x - this.vel;
        blockPos = "right";
    }

    if(topCell.constructor.name == "Block" || topCell.constructor.name == "Wall") {
        this.y = this.y + this.vel;
        blockPos = "top";
    }
    if(bottomCell.constructor.name == "Block" || bottomCell.constructor.name == "Wall") {
        this.y = this.y - this.vel;
        blockPos = "bottom";
    }
    if(blockPos && this.walking) {
        // this.game.music.collision.play();
    }
    return blockPos;
}

Player.prototype.throwBomb = function() {
    var cell = getTheCell(this.x + 25, this.y + 50);
    var bomb = new Bomb(this.game, cell.cellx, cell.celly);
    game.board.varElements[cell.celly][cell.cellx] = bomb;
    var that = bomb;
    setTimeout(function(){
        that.explode();
    }, 2000);
}

Player.prototype.receiveDamage = function() {
    this.livesLeft--;
    this.alive = false;
    var that = this;
    updateCount("player", this.livesLeft);
    if(this.livesLeft > 0) {
        setTimeout(function(){
            (that.constructor.name === "Player") ? that.revive() : that.remove();
        }, 2000);
    } else {
        this.game.gameOver();
        gameState = 0;
    }
}

Player.prototype.revive = function() {
    this.alive = true;
    this.x = this.initx;
    this.y = this.inity;
    this.trackDir = trackDown;
    this.updateSprite();
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
            return game.board.varElements[celly][cellx];
        }
    }
    return game.board.cells[celly][cellx];
}
