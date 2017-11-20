var quartCircles = Array()
var img
var rotation = 0

function preload() { 
	img = loadImage("assets/cercle.png"); 
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	var opt = {
		x: windowWidth/2, 
		y: windowHeight/2,
		posInit : 0,
		radius : 350,
		rotate : 0.01
	}

	quartCircles.push(new QuartCircle(opt))

	opt.posInit = 280

	quartCircles.push(new QuartCircle(opt))
	hourBar = new HourBar()
	halfCircle = new HalfCircle()
	
}

function draw() {
	clear();
	background('#222222');

	push()
	stroke(0,0,0)
	noFill()

	translate(windowWidth/2, windowHeight/2);
	rotation += 0.005
	rotate(rotation)

	image(img, -150, -150, 300, 300);

	pop()

	quartCircles.forEach(function (quartCircle, i) {
		quartCircle.update()
	})



	stroke(255,255,255)
	rect(windowWidth/2 + 300, windowHeight/2 - 70, 55, 55);
	rect(windowWidth/2 + 300, windowHeight/2 + 70, 55, 55);

	hourBar.update()
	halfCircle.update()

}

function mousePressed() {

	// Check if mouse is inside the circle
	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 130 && d < 170) {
		console.log('fuck you')
	}

	e = dist(mouseX, mouseY, windowWidth/2 + 325 , windowHeight/2 - 50);

	if (e < 40 ) {
		hourBar.prevHour()
		if (hourBar.hour == 5 || hourBar.hour == 10 ) {
			halfCircle.prevHalf()
			if (hourBar.hour == 0) {
				hourBar.hour = 10
			}
		}
	}

	f = dist(mouseX, mouseY, windowWidth/2 + 325, windowHeight/2 + 90);

	if (f < 40) {
		hourBar.nextHour()
		if (hourBar.hour == 5 || hourBar.hour == 10 ) {
			halfCircle.nextHalf()
			if (hourBar.hour == 10) {
				hourBar.hour = 1
			}
		}
	}
  }