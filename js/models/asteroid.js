function Asteroid(x, y, dx, dy, size) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.points = [];

    this.generateShape = function(numberOfSides) {       
        for (var i = 0; i <= numberOfSides; i += 1) {
            this.points[i] = [this.x + (this.size + 20 * (Math.floor((Math.random() * 3) + 1))) * Math.cos(i * 2 * Math.PI / numberOfSides),
            y + (this.size + 20 * (Math.floor((Math.random() * 3) + 1))) * Math.sin(i * 2 * Math.PI / numberOfSides)];
        }

        this.points[numberOfSides] = [this.points[0][0], this.points[0][1]];

    }

    this.generateShape(10);
}