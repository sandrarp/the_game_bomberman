var game;

function Bomberman() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
}

/*
* 0 = empty cell
* B = block
* 
*/
var initialGrid = [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
]
var gameArea = {
    grid: initialGrid,
}