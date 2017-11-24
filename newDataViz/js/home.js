var cercle = {
    pos: 1.5 * Math.PI
}
var hover = false

function setup() {
    var canvas = createCanvas(640, 680);
    canvas.parent('container');
}

function draw(){
    clear()
    stroke(255,255,255, 255)
    strokeWeight(20)
    strokeCap(SQUARE)
    noFill()
    translate(width/2, height/2);

    if (hover) {
        cercle.pos += 0.01
    }

    rotate(cercle.pos)
    circle = arc(0, 0, 548, 548, 0, .3 * PI );

}

var mybtn = document.getElementById("btn")
mybtn.addEventListener("mouseenter",function(){
    hover = true
});

mybtn.addEventListener("mouseleave",function(){
    TweenLite.to(cercle, 1.5, {ease: Power1.easeOut, pos: 11});
    hover = false
});


