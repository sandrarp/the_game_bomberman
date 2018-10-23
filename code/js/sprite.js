function Sprite(game, object, sheetWidth, sheetHeight,) {
    this.game = game; 
    this.object = object;
    this.x = this.object.x;
    this.y = this.object.x;
    
    this.trackDown = 0;
    this.trackLeft = 1;
    this.trackRight = 2;
    this.trackUp = 3;
    this.trackPos = trackDown;

    this.srcX = 0;
    this.srcY = 0;

    this.sheetWidth = object.spriteSheetSize[0];
    this.sheetHeight = object.spriteSheetSize[1];

    this.cols = 3;
    this.rows = 4;

    this.width = sheetWidth / cols; 
    this.height = sheetHeight / rows;

    this.currentFrame = 0;

    this.character = new Image();
    character.src = "sprite-3.png";

    this.canvas = document.getElementById("canvas");
    canvas.width = canWidth;
    canvas.height = canHeight;
    this.ctx = canvas.getContext('2d');

    this.increment;
    this.walking = false;
}