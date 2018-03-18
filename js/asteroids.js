var GAME_FPS = 60;

var msBetweenFrames = 1000 / GAME_FPS;
var canvas = document.getElementById("game-canvas");
var context = canvas.msGetInputContext('2d');
var width = canvas.width;
var height = canvas.height;
setTimeout(gameTick, msBetweenFrames);

function gameTick() {
    // DO STUFF

    setTimeout(gameTick, msBetweenFrames);
}