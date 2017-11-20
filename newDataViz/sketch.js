var quartCircles = Array()
var img;

function setup() {
	createCanvas(windowWidth, windowHeight)
	var opt = {
		x:     windowWidth/2 , 
		y:     windowHeight/2,
		rotate : 0
	}

	quartCircles.push(new QuartCircle(opt))

	opt.rotate = 280

	quartCircles.push(new QuartCircle(opt))
}

function draw() {
	clear();

	// push()
	// stroke(0,0,0)
	// noFill()

	translate(windowWidth/2, windowHeight/2);
	// circle = arc(0, 0, 300, 300, 0, 2 * PI );

	img = createImage(300, 300);


	pop()

	quartCircles.forEach(function (quartCircle, i) {
		quartCircle.update()
	})

}