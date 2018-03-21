var canvas = new Canvas("game-canvas");
var spaceship = new Spaceship();
var asteroid = new Asteroid(100, 100, 0, 0, 3);

var keys = [];
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

var entities = [];

function gameTick() {
    
    // HANDLE ROTATION
    if(keys[37]) {
        spaceship.rotateLeft();
    }

    if(keys[39]) {
        spaceship.rotateRight();
    }

    // Acceleration / Deceleration
    if(keys[38]) {
        spaceship.accelerate();
    }

    if(keys[40]) {
        spaceship.decelerate();
    }

    spaceship.updatePosition();

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
    canvas.drawAsteroid(asteroid.x, asteroid.y, asteroid.size);
    //canvas.drawAsteroid(500, 100, 0, 0, 2);
}

var GAME_FPS = 60;

var msBetweenFrames = 1000 / GAME_FPS;


startGame();