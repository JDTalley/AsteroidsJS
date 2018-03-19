function Spaceship() {
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.orientation = 0;

    this.shoot = function() {
        // TODO: This.
    }

    this.accelerate = function() {
        var deg = this.mathifyOrientation();
        this.dx += Math.cos(deg) / 10;
        this.dy -= Math.sin(deg) / 10;
    }

    this.decelerate = function() {
        var deg = this.mathifyOrientation();
        this.dx -= Math.cos(deg) / 10;
        this.dy += Math.sin(deg) / 10;
    }

    this.updatePosition = function() {
        this.x += this.dx;
        this.y += this.dy;
    }

    this.setX = function(x) {
        this.x = x;
    }

    this.setY = function(y) {
        this.y = y;
    }
    
    this.rotateLeft = function() {
        this.orientation -= 5;
    }
    
    this.rotateRight = function() {
        this.orientation += 5;
    }

    this.mathifyOrientation = function() {
        // Convert to degrees, then convert to radians.
        return (90 - this.orientation) * (Math.PI / 180);
    }
}