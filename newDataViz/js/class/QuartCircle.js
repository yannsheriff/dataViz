function QuartCircle( opt ) { 
    

    this.x = opt.x
    this.y = opt.y
    this.pos = opt.posInit
    this.radius = opt.radius
    this.rotate = opt.rotate

}

QuartCircle.prototype = {
    update: function () {
        push()
        stroke(255,255,255, 255)
        strokeWeight(2)
        strokeCap(SQUARE)
        noFill()
        translate(this.x, this.y);

        this.pos += this.rotate
        rotate(this.pos)
        circle = arc(0, 0, this.radius, this.radius, 0, .3 * PI );
        pop()
    }

}

