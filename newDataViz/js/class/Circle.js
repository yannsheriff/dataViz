function Circle() { 
    
    this.x = windowWidth/2
    this.y = windowHeight/2
    this.opacity = 0
    this.radiusImg = 450
    this.radius = 435
    this.isSelected = false

}

Circle.prototype = {
    update: function () {
        push()
        translate(this.x, this.y);
        rotation += 0.005
        rotate(rotation)
        stroke(255,255,255, this.opacity)
        noFill()
        strokeWeight(15)
        circle = arc(0, 0, this.radius, this.radius, 0, 2 * PI );
        image(img, 0, 0, this.radiusImg, this.radiusImg);
        pop()
    }, 
    select: function() {
        this.isSelected = true
        TweenLite.to(this, 1.5, {ease: Power1.easeOut, pos: this.pos + 2});
        TweenLite.to(this, 1, {ease: Power1.easeOut, opacity: 200});
    }, 
    unselect: function() {
        this.isSelected = false
        TweenLite.to(this, 1, {ease: Power1.easeOut, opacity: 0});
    }
}

