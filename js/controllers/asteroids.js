var canvas = new Canvas("game-canvas");
var spaceship = new Spaceship();


function gameTick() {
    // DO STUFF
    this.redrawCanvas();

    setTimeout(gameTick, msBetweenFrames);
}

function startGame() {
    this.canvas.setBackground("#000000");

    queueTick();
}

function queueTick() {
    setTimeout(gameTick, msBetweenFrames);
}

function redrawCanvas() {
    canvas.drawSpaceship(spaceship.x, spaceship.y, spaceship.orientation);
}

var GAME_FPS = 60;

var msBetweenFrames = 1000 / GAME_FPS;


startGame();