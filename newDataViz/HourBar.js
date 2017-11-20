function HourBar( opt ) { 
    

    this.x = windowWidth/2
    this.y = windowHeight/2
    this.pos = 1.5 * PI
    this.radius = 25s0

}

HourBar.prototype = {
    update: function () {
        push()
        stroke(255,255,255, 50)
        strokeWeight(10)
        strokeCap(SQUARE)
        noFill()
        translate(this.x, this.y);

        rotate(this.pos)
        circle = arc(0, 0, this.radius, this.radius, 0, .222 * PI );
        pop()
    }

}

