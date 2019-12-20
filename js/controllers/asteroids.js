var canvas = new Canvas("game-canvas");
var width = canvas.width;
var height = canvas.height;

var spaceship = new Spaceship(width/2, height/2);

var frame = 1;

var keys = [];
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

var asteroids = [];
var bullets = [];

// Set up pew
var sPew = new Sound("assets/Laser_Shoot.wav");
var sBoom = new Sound("assets/Explosion.wav");

var score = 0;

function gameTick() {
    // Frame Counter
    if (frame <= GAME_FPS) {
        frame += 1;
    } else {
        frame = 1;
    }

    // HANDLE ROTATION
    if(keys[37]) {
        spaceship.rotate(-5);
    }

    if(keys[39]) {
        spaceship.rotate(5);
    }

    // Acceleration / Deceleration
    if(keys[38]) {
        spaceship.accelerate();
    }

    if(keys[40]) {
        spaceship.decelerate();
    }

    // Shooting
    if (keys[32]) {
        if (frame % 15 == 0) {
            bullets.push(spaceship.shoot(frame));
            sPew.play();
        };
    }

    // Asteroid Spawning
    if (asteroids.length < 1 && frame % 30 == 0) {
        var spawnx = Math.random() * width;
        var spawny = Math.random() * height;
        var spawndx = Math.random() * 3; // 2 or 3
        spawndx *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // negative 50% of the time
        var spawndy = Math.random() * 3; //2 or 3
        spawndy *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // negative 50% of the time
        var newAsteroid = new Asteroid(spawnx, spawny, spawndx, spawndy, 1, 6)
        if (!spaceship.checkCollision(newAsteroid)){
            asteroids.push(newAsteroid)
        }
        // asteroids.push(new Asteroid(width/2+50, height/2+50, 0, 2, 1, 6));
    }


    // Update Positions
    spaceship.updatePosition(width, height);

    if(bullets.length > 0) {
        for (item in bullets) {
            bullets[item].updatePosition(width, height);
        }
    }

    if(asteroids.length > 0) {
        for (item in asteroids) {
            asteroids[item].updatePosition(width, height);
        }
    }

    // Check for Collisions
    // Aseteroids and Ship
    for (item in asteroids) {
        if (spaceship.checkCollision(asteroids[item])) {
            sBoom.play();
            console.log("DEATH!!");
            spaceship.setX(width/2);
            spaceship.setY(height/2)
            spaceship.setDX(0);
            spaceship.setDY(0);
            spaceship.updatePosition(width, height);
            spaceship.setOrientation(0);
            asteroids.splice(item, 1);
        }
    }

    // Asteroids and Bullets
    for (item in bullets) {
        for (i = 0; i < asteroids.length; i++) {
            if (bullets[item].checkCollision(asteroids[i])) {
                bullets.splice(item, 1);
                asteroids.splice(i, 1);
                score++;
                sBoom.play();
                console.log("HIT!!");
            }
        }
    }

    // Per second updates
    if (frame == 60) {
        score++;
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

    // Draw the spaceship
    canvas.drawSpaceship(spaceship);

    // Draw the asteroids
    for (i = 0; i < asteroids.length; i ++) {
        canvas.drawAsteroids(asteroids[i], asteroids[i].getBounds());
    }
    //canvas.drawAsteroids(asteroids);

    // Draw the bullets
    for (i = 0; i < bullets.length; i++) {
        if (!bullets[i].checkDistance(frame)) {
            canvas.drawBullets(bullets[i]);
        } else {
            bullets.splice(i, 1);
        }
    }

    // Draw the score
    canvas.drawScore(score);
}

var GAME_FPS = 60;

var msBetweenFrames = 1000 / GAME_FPS;


startGame();