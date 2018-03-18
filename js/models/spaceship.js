function Spaceship() {
    this.x = 150;
    this.y = 50;
    this.dx = 0;
    this.dy = 0;
    this.orientation = 0;

    this.shoot = function() {
        // TODO: This.
    }

    this.accelerate = function() {

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
}