var quartCircles = Array()
var img
var rotation = 0

function preload() { 
	img = loadImage("assets/cercle.png"); 
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	var opt = {
		x:     windowWidth/2 , 
		y:     windowHeight/2,
		posInit : 0,
		radius : 350, 
		rotate : 0.01
	}

	quartCircles.push(new QuartCircle(opt))

	opt.posInit = 280

	quartCircles.push(new QuartCircle(opt))
	hourBar = new HourBar()
	
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

	hourBar.update()
	
}

function mousePressed() {
	// Check if mouse is inside the circle
	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 130 && d < 170) {
		console.log('fuck you')
	}
  }