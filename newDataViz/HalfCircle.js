function HalfCircle() { 
    

    this.x = windowWidth/2
    this.y = windowHeight/2
    this.pos = 1.5 
    this.radius = 255
    this.hour = 1

}

HalfCircle.prototype = {
    update: function () {
        push()
        stroke(255,255,255, 50)
        strokeWeight(10)
        strokeCap(SQUARE)
        noFill()
        translate(this.x, this.y);

        rotate(this.pos * PI)
        circle = arc(0, 0, this.radius, this.radius, 0, 1 * PI );

        pop()
    }, 
    nextHalf: function() {
        TweenLite.to(this, 1, {pos: this.pos + 1});
    }, 

    prevHalf: function() {
        TweenLite.to(this, 1, {pos: this.pos + 1});
    }


}

