function Bomberman(level) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.level = level;
    this.board = new Board(this);
    this.cellwidth = 50;
    this.player = new Player(this);
    this.enemies = [];
    this.numEnemies =  this.level;
    this.music = new Music();
    this.frame = 0;
}

Bomberman.prototype.start = function() {
    gameState = 1;
    this.board.defineCells();
    this.board.buildWalls();
    this.music.ambient.play();
    this.createEnemies();
    updateCount("player", this.player.livesLeft);
    requestAnimationFrame(loop);
}

Bomberman.prototype.createEnemies = function() {
    for(var i = 0; i < this.numEnemies; i++) {
        var enemy = new Enemy(this, i);
        this.enemies.push(enemy);
    }
}

Bomberman.prototype.newLevel = function() {

}

Bomberman.prototype.win = function() {
    document.getElementById("game-win").classList.remove('hidden');
    gameState = 0;
}

Bomberman.prototype.gameOver = function() {
    document.getElementById("game-over-screen").classList.remove('hidden');
    gameState = 0;
}

function loop() {
    if(!gameState) {
        return;
    }
    game.board.draw();
    game.board.drawLayerVarElements();
    game.player.update();
    if(game.enemies.length > 0) {
        for(var i = 0; i < game.enemies.length; i++) {
            if(game.enemies[i].alive) {
                game.enemies[i].update();
            } else {
                game.enemies.splice(i, 1);
            }
        }
    } else {
        game.win();
    }
    game.frame++;
    loopId = requestAnimationFrame(loop);
  }