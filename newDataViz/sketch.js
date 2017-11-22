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
	FiraSansMedium = loadFont("assets/FiraSansMedium.otf")
	data = loadJSON("assets/data.json");
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
	bigCircle = new Circle()
	hourDisplay = new Hour(statistiques)
	customBackground = new Background(backgrounds)	
	dataVisualizer = new DataVisualizer(data)
	dataVisualizer.changeData(data[0])
}

function draw() {
	clear();

	/*
	* update des backgrounds :
	*/
	customBackground.update()
	

	/*
	* mise en place des cercle qui tourne (quart de cercle ) :
	*/

	quartCircles.forEach(function (quartCircle, i) {
		quartCircle.update()
	})


	/*
	* mise en place des boutons :
	*/
	stroke(255,255,255)
	image(button, windowWidth/2 + 300, windowHeight/2 )


	/*
	* udpdate des objets :
	*/
	hourDisplay.update()
	hourBar.update()
	halfCircle.update()
	bigCircle.update()
	dataVisualizer.update()

}

function mousePressed() {
	click++
	
	// Securite pour qu'on ne puisse pas trop cliqué sur les boutons
	if ( click < 2)  {

		/*
		* Au click sur le bouton du haut :
		*/
		e = dist(mouseX, mouseY, windowWidth/2 + 300 , windowHeight/2 - 50);
		if (e < 40 ) {

			// si le demi cercle est activé : le desactivé
			if (halfCircle.isSelected) {
				halfCircle.unselect()
				hourBar.select()
				customBackground.unDisplayHalfDay()
			}

			// si le cercle est activé : le desactivé
			bigCircle.unselect()
			customBackground.unDisplayDay()

			hourBar.prev()
			hourDisplay.prev()
			customBackground.prev()

			// si les heures passent dans l'apres midi ou la matiné
			if (hourBar.hour == 3 || hourBar.hour == -1 ) {
				halfCircle.prev()
				setTimeout(function() { if (hourBar.hour == -1) { hourBar.hour = 8 } }, 100) 
			}

			dataVisualizer.changeData(data[hourBar.hour])
		}


		/*
		* Au click sur le bouton du bas :
		*/
		f = dist(mouseX, mouseY, windowWidth/2 + 300, windowHeight/2 + 50);
		if (f < 40) {

			// si le demi cercle est activé : le desactivé
			if (halfCircle.isSelected) {
				halfCircle.unselect()
				hourBar.select()
				customBackground.unDisplayHalfDay()
			}

			// si le cercle est activé : le desactivé
			bigCircle.unselect()
			customBackground.unDisplayDay()

			hourBar.next()
			hourDisplay.next()
			customBackground.next()

			// si les heures passent dans l'apres midi ou la matiné
			if ( hourBar.hour == 4 || hourBar.hour == 9 ) {
				halfCircle.next()
				setTimeout(function() { if (hourBar.hour == 9) { hourBar.hour = 0 } }, 100) 
			}

			dataVisualizer.changeData(data[hourBar.hour])
		}



		setTimeout(function() { click = 0 }, 2000) 
	}


	/*
	* Au click sur le demi-cercle (matin apres-midi) :
	*/
	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 190 && d < 200) {
		customBackground.unDisplayDay()
		hourBar.unselect()
		bigCircle.unselect()
		if (!halfCircle.isSelected) { customBackground.displayHalfDay(halfCircle.isMorning) }
		halfCircle.select()
		hourDisplay.displayHalfDay(halfCircle.isMorning)
	}


	/*
	* Au click sur le cercle (journée) :
	*/
	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 210 && d < 230) {
		hourBar.unselect()
		halfCircle.unselect()
		bigCircle.select()
		halfCircle.spin()
		hourBar.spin()
		customBackground.displayDay()
	}


	/*
	* Au click sur l'indicateur d'heure (dans le cercle)  :
	*/
	var d = dist(mouseX, mouseY, windowWidth/2, windowHeight/2);
	if (d > 170 && d < 180) {
		if (halfCircle.isSelected){ 
			customBackground.unDisplayHalfDay() 
			hourDisplay.unDisplayHalfDay()
		}
		customBackground.unDisplayDay()
		halfCircle.unselect()
		bigCircle.unselect()
		hourBar.select()
	}
	
	
  }