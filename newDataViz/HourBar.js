function HourBar(  ) { 
    

    this.x = windowWidth/2
    this.y = windowHeight/2
    this.pos = 1.5 
    this.radius = 350
    this.hour = 0
    this.opacity = 255
}

HourBar.prototype = {
    update: function () {
        push()
        stroke(255,255,255, this.opacity)
        strokeWeight(10)
        strokeCap(SQUARE)
        noFill()
        translate(this.x, this.y);

        rotate(this.pos * PI)
        circle = arc(0, 0, this.radius, this.radius, 0, .222 * PI );

        pop()
    }, 

    next: function() {
        TweenLite.to(this, 1, {pos: this.pos + .222});
        this.hour++
    }, 

    prev: function() {
        TweenLite.to(this, 1, {pos: this.pos - .222});
        this.hour--
    }, 
    select: function() {
        TweenLite.to(this, 1, {ease: Power1.easeInOut, pos: this.pos + 2});
        TweenLite.to(this, 1, {ease: Power1.easeInOut, opacity: 255});
    }, 
    unselect: function() {
        TweenLite.to(this, 1, {ease: Power1.easeInOut, opacity: 100});
    }
}

