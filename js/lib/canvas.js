function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.setBackground = function(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    this.drawSpaceship = function(color, x, y, orientation) {
        this.context.fillStyle = color;

        this.context.translate((this.width / 2) + x, (this.height / 2) + y);
        this.context.rotate(orientation * Math.PI / 180);
        this.context.beginPath();
        this.context.moveTo(0, - 10);
        this.context.lineTo(-6, 10);
        this.context.lineTo(6, 10);
        this.context.fill();
        this.context.rotate(-orientation * Math.PI / 180);
        this.context.setTransform(1, 0, 0, 1, 0, 0);

    }

    this.drawAsteroid = function(x, y, dx, dy, size) {
        this.context.strokeStyle = '#000000'
        this.context.lineWidth = 1;

        var numberOfSides = 10;
        this.context.beginPath();
        this.context.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          
        for (var i = 1; i <= numberOfSides-1; i += 1) 
        {
            this.context.lineTo (x + (size + 20 * (Math.floor((Math.random() * 3) + 1))) * Math.cos(i * 2 * Math.PI / numberOfSides),
            y + (size + 20 * (Math.floor((Math.random() * 3) + 1))) * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        this.context.lineTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));
        this.context.stroke();
    }
}