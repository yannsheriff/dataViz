function HalfCircle() { 
    

    this.x = windowWidth/2
    this.y = windowHeight/2
    this.pos = 1.5 
    this.radius = 390
    this.hour = 1
    this.opacity = 50;
    this.isMorning = true
    this.isSelected = false

}

HalfCircle.prototype = {
    update: function () {
        push()
        stroke(255,255,255, this.opacity)
        strokeWeight(10)
        strokeCap(SQUARE)
        noFill()
        translate(this.x, this.y);

        rotate(this.pos * PI)
        circle = arc(0, 0, this.radius, this.radius, 0, 1 * PI );

        pop()
    }, 
    next: function() {
        TweenLite.to(this, 1, {ease: Power1.easeOut, pos: this.pos + 1});
        this.isMorning = !this.isMorning
    }, 

    prev: function() {
        TweenLite.to(this, 1, {ease: Power1.easeOut, pos: this.pos + 1});
        this.isMorning = !this.isMorning
    }, 
    select: function() {
        this.isSelected = true
        TweenLite.to(this, 1.5, {ease: Power1.easeOut, pos: this.pos + 2});
        TweenLite.to(this, 1, { opacity: 255});
    },
    unselect: function() {
        this.isSelected = false
        TweenLite.to(this, 1, {ease: Power1.easeOut, opacity: 100});
    }
}

