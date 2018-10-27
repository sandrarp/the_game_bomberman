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
    this.qtyWalls = 8;
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
 // Posiciones random del array varELems y si no es null, colocar wall colocar walls
    for(var i = 0; i <= this.qtyWalls; i++) {
        var pos = this.getRandomPos("empty");
        if(pos === undefined) {
            i--;
        } else {
            var wall = new Wall(game, pos[0], pos[1]);
            this.varElements[pos[1]][pos[0]] = wall;
        }
    }
}

Board.prototype.draw = function() {
    for(var i = 0; i < this.cells.length; i++) {
        for(var j = 0; j < this.cells[i].length; j++) {
            var object = this.cells[i][j];
            object.draw();
        }
    }
}

Board.prototype.drawLayerVarElements = function() {
    for(var i = 0; i < this.cells.length; i++) {
        for(var j = 0; j < this.cells[i].length; j++) {
            var object = this.cells[i][j];
             this.defineVarElements(object, i, j);
        }
    }
}

Board.prototype.getRandomPos = function(which) {
    var array = [];
    var randomX = Math.floor(Math.random() * (this.cells[0].length));
    var randomY = Math.floor(Math.random() * (this.cells.length));
    array.push(randomX);
    array.push(randomY);
    if(which === "all") {
        return array;
    }
    if(which === "empty") {
        var objectHere = getTheCell(randomX, randomY, "index");
        if(objectHere.constructor.name === "Block") {
            this.getRandomPos("empty");
        } else {
            return array;
        }
    }
}


Board.prototype.update = function() {

}