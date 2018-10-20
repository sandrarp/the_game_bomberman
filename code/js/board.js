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
    this.varElements = [];
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
        this.varElements.push([]);
    }
    console.log(this.cells);
}

Board.prototype.defineVarElements = function(object, i, j) {
    if(object.constructor.name == "Block") {
        this.varElements[i][j] = null;
    }
    var varElem = this.varElements[i][j];
    if(varElem !== undefined && varElem !== null) {
        varElem.draw();
    }
}

Board.prototype.buildWalls = function() {
    
}

Board.prototype.draw = function() {
    for(var i = 0; i < this.cells.length; i++) {
        for(var j = 0; j < this.cells[i].length; j++) {
            var object = this.cells[i][j];
            object.draw();
            this.defineVarElements(object, i, j);
        }
    }
}


Board.prototype.update = function() {

}