function QuartCircle( opt ) { 
    

    this.x = opt.x
    this.y = opt.y
    this.rotate = opt.rotate;


}

QuartCircle.prototype = {
    update: function () {
        push()
        stroke(0,0,0)
        noFill()
        translate(this.x, this.y);

        this.rotate += 0.02
        rotate(this.rotate)
        circle = arc(0, 0, 320, 320, 0, .3 * PI );
        pop()
    }

}

