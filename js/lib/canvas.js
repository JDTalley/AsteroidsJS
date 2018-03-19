function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.setBackground = function(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    this.drawAsteroid = function () {
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = 1;
        this.context.beginPath();
        for (var i=0; i<9; i++) {
            ctx.moveTo (Xcenter +  sizex * Math.cos(0), Ycenter +  sizey *  Math.sin(0));       
        {
            ctx.lineTo (Xcenter + (sizex + 10 * (Math.floor((Math.random() * 3) + 1))) * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + (sizey + 10 * (Math.floor((Math.random() * 3) + 1))) * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        ctx.lineTo (Xcenter +  sizex * Math.cos(0), Ycenter +  sizey *  Math.sin(0));
        ctx.stroke();
        }
    }
}