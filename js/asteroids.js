var canvas = new Canvas("game-canvas");


function gameTick() {
    // DO STUFF

    setTimeout(gameTick, msBetweenFrames);
}

function startGame() {
    this.canvas.setBackground("#000000");

    queueTick();
}

function queueTick() {
    setTimeout(gameTick, msBetweenFrames);
}

var GAME_FPS = 60;

var msBetweenFrames = 1000 / GAME_FPS;


startGame();