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
    var rowCells = [];
    for(var i = 0; i < this.grid.length; i++) {
        rowCells = [];
        for(var j = 0; j < this.grid[i].length; j++) {
            switch (this.grid[i][j]) {
                case "B":
                    var block = new Block(this.game, j, i);
                    rowCells.push(block);
                    break; 
                case 0:
                    var emptyCell = new Cell(this.game, j, i);
                    rowCells.push(emptyCell);
                    break; 
                default: 
                    console.log("something went wrong");
            }
        }
        this.cells.push(rowCells);
    }
    console.log(this.cells);
}

Board.prototype.draw = function() {
    
}

Board.prototype.update = function() {

}