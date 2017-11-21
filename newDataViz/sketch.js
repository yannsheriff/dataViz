var quartCircles = Array()
var img
var rotation = 0
var click = 0

function preload() { 
	img = loadImage("assets/cercle.png"); 
	bg1 = loadImage("assets/bg_10.png"); 
	bg2 = loadImage("assets/bg_2.png"); 
	bg3 = loadImage("assets/bg_3.png"); 
	bg4 = loadImage("assets/bg_4.png"); 
	bg5 = loadImage("assets/bg_5.png"); 
	bg6 = loadImage("assets/bg_6.png"); 
	bg7 = loadImage("assets/bg_7.png"); 
	bg8 = loadImage("assets/bg_8.png"); 
	bg9 = loadImage("assets/bg_9.png"); 
	button = loadImage("assets/buttons.png"); 
	BebasNeueBook = loadFont("assets/BebasNeueBook.otf")
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER);
	var backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9]
	var opt = {
		x: windowWidth/2, 
		y: windowHeight/2,
		posInit : 0,
		radius : 470,
		rotate : 0.01
	}

	quartCircles.push(new QuartCircle(opt))

	opt.posInit = 280

	quartCircles.push(new QuartCircle(opt))
	hourBar = new HourBar()
	halfCircle = new HalfCircle()
	hourDisplay = new Hour(statistiques)
	customBackground = new Background(backgrounds)	
}

function draw() {
	clear();
	customBackground.update()
	push()
	stroke(0,0,0)
	noFill()


	translate(windowWidth/2, windowHeight/2);
	rotation += 0.005
	rotate(rotation)

	image(img, 0, 0, 450, 450);
	pop()

	quartCircles.forEach(function (quartCircle, i) {
		quartCircle.update()
	})



	stroke(255,255,255)
	// rect(windowWidth/2 + 300, windowHeight/2 - 70, 55, 55);
	// rect(windowWidth/2 + 300, windowHeight/2 + 70, 55, 55);
	image(button, windowWidth/2 + 300, windowHeight/2 )
	
	hourDisplay.update()
	hourBar.update()
	halfCircle.update()

}

function mousePressed() {
	click++
	
	// wait before next animation to click 
	if ( click < 2)  {
		// console.log(click)
		// Check if mouse is inside the circle
		e = dist(mouseX, mouseY, windowWidth/2 + 300 , windowHeight/2 - 50);

		if (e < 40 ) {
			hourBar.prev()
			hourDisplay.prev()
			customBackground.prev()
			if (hourBar.hour == 3 || hourBar.hour == -1 ) {
				halfCircle.prev()
				setTimeout(function() { if (hourBar.hour == -1) { hourBar.hour = 8 } }, 100) 
			}
			console.log(hourBar.hour)
		}
	
		f = dist(mouseX, mouseY, windowWidth/2 + 300, windowHeight/2 + 50);
		if (f < 40) {
			hourBar.next()
			hourDisplay.next()
			customBackground.next()
			if ( hourBar.hour == 4 || hourBar.hour == 9 ) {
				halfCircle.next()
				setTimeout(function() { if (hourBar.hour == 9) { hourBar.hour = 0 } }, 100) 
				
			}
		}
		setTimeout(function() { click = 0 }, 2000) 
	}

	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 190 && d < 200) {
		console.log('fuck you')
		halfCircle.select()
		hourBar.unselect()
	}

	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 165 && d < 175) {
		console.log('fuck you')
		halfCircle.unselect()
		hourBar.select()
	}
	
	
	

  }