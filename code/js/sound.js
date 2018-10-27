function Music() {
    this.ambient = new Audio("sounds/ambient.mp3"); 
    this.ambient.volume = 0.5; 
    this.ambient.loop = true; 
    this.collision = new Audio("sounds/collision.mp3"); 
    this.collision.volume = 0.7; 
}