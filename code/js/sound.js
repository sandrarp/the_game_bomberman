function Music() {
    this.ambient = new Audio("sounds/ambient.mp3"); 
    this.ambient.volume = 0.5; 
    this.ambient.loop = true; 
    this.collision = new Audio("sounds/collision.mp3"); 
    this.collision.volume = 0.7; 
    this.bomb = new Audio("sounds/bomb.mp3");
    this.bomb.volume = 0.7; 
    this.gameOver = new Audio("sounds/game-over.mp3");
    this.win = new Audio("sounds/win.mp3");
    this.kill = new Audio("sounds/kill-enemy.mp3");
    this.kill.volume = 0.7; 
}