var canvas = new Canvas("game-canvas");
var spaceship = new Spaceship();

var keys = [];
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

function gameTick() {
    
    // HANDLE ROTATION
    if(keys[37]) {
        spaceship.rotateLeft();
    }

    if(keys[39]) {
        spaceship.rotateRight();
    }

    redrawCanvas();

    setTimeout(gameTick, msBetweenFrames);
}

function startGame() {
    queueTick();
}

function queueTick() {
    setTimeout(gameTick, msBetweenFrames);
}

function redrawCanvas() {
    canvas.setBackground("#000000");
    canvas.drawSpaceship("#FFFFFF", spaceship.x, spaceship.y, spaceship.orientation);
}

var GAME_FPS = 60;

var msBetweenFrames = 1000 / GAME_FPS;


startGame();