/*
* 0 = empty cell
* B = block
* 
*/
var initialGrid = [
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B"],
    ["B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B"],
    ["B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B"],
    ["B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B"],
    ["B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B"],
    ["B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B"],
    ["B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B"],
    ["B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B", 0, "B"],
    ["B", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
]

function Board(game) {
    this.game = game;
    this.grid = initialGrid;
    this.cells = [];
}

Board.prototype.defineCells = function() {
    
}

Board.prototype.draw = function() {
    
}

Board.prototype.update = function() {

}