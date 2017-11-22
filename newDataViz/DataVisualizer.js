function DataVisualizer(data) { 
    
    this.data = data
    this.upper = 0;
    this.isGraphPercentage = false
    this.isGraphHour = true
    this.isGraphHourPercent = false
    this.radiusImg = 450
    this.radius = 435
    this.x = width / 2
    this.y = height / 2
    this.percentages = []
    this.count = 0
    this.posCircle = [
        {
            x: -50,
            y: -80
        }, 
        {
            x: 70,
            y: 40
        }, 
        {
            x: -80,
            y: 40
        }, 
        {
            x: 50,
            y: -80
        }, 
        {
            x: -20,
            y: 100
        }, 
    ]
    this.posText = [
        {
            x: -550,
            y: -250, 
            align: true
        }, 
        {
            x: 400,
            y: -200, 
            align: false
        }, 
        {
            x: -550,
            y: 150, 
            align: true
        }, 
        {
            x: 400,
            y: 100, 
            align: false
        }, 
        {
            x: -550,
            y: 0, 
            align: true
        }, 
    ]

    this.endLine = [
        {
            x: -80,
            y: -80, 
        }, 
        {
            x: 80,
            y: -80, 
        }, 
        {
            x: -110,
            y: 90, 
            
        }, 
        {
            x: 110,
            y: 80, 
        }, 
        {
            x: -160,
            y: 30, 
        }, 
    ]


}

DataVisualizer.prototype = {
    update: function () {

        this.displayLegend(this.data.phrase)

        if (this.isGraphPercentage) { this.displayPercentages() }
        if (this.isGraphHour) { this.displayGraphHour() }
        if (this.isGraphHourPercent) { 
            this.displayGraphHourPercent() 
        }
    }, 
    displayPercentages: function() {
        push()
        this.mapTextsToDatas()
        translate(this.x, this.y);
        this.percentages.forEach(function(percentage) {
            this.displayOnePercentage(percentage)
        }.bind(this));
        pop()
        this.displayPercentTexts()
        
    }, 
    displayOnePercentage: function(circle){
        if (this.count > 200) {
            this.count = 0
        }
        if(this.count < 4 ) {
            this.tween(circle)
        }
        this.count++
        
        push()
        noStroke()
        var opacity = map(circle.pourcentage, 0, this.upper, 0, 255)
        fill(255,255,255, opacity)
        circle.posSave.x = circle.pos.x + circle.randX
        circle.posSave.y = circle.pos.y + circle.randY * 2

        circle = arc(circle.pos.y + circle.randY, circle.pos.y + circle.randY * 2, circle.pourcentage * 2, circle.pourcentage * 2, 0, 2 * PI );
        pop()
    }, 
    displayGraphHour: function(){
        this.displayHour(this.data.dataHeure)
        this.displayLeftText(this.data.phraseFL, this.data.premier)
        this.displayRightText(this.data.phraseFL, this.data.dernier)
    },
    displayHour: function(theHour){
        push()
        textFont(BebasNeueBook);
        fill(255,255,255, 255)
        textSize(160);
        textAlign(CENTER, CENTER);
        text(theHour,0,0, width, height);
        pop()
    },
    displayLeftText: function(theText, theHour){
        push()
        textFont(FiraSansMedium);
        fill(255,255,255, 255)
        textSize(20);
        textAlign(RIGHT, CENTER);
        text("Le premier "+theText ,width / 2 - 400, height / 2 - 20);
        textSize(50);
        text(theHour ,width / 2 - 400, height / 2 + 20 );
        pop()
    },
    displayRightText: function(theText, theHour){
        push()
        textFont(FiraSansMedium);
        fill(255,255,255, 255)
        textSize(20);
        textAlign(LEFT, CENTER);
        text("Le dernier "+theText ,width / 2 + 400, height / 2 - 20);
        textSize(50);
        text(theHour ,width / 2 + 400, height / 2 + 20 );
        pop()
    },
    displayLegend: function(theText){
        push()
        textFont(FiraSansMedium);
        fill(255,255,255, 255)
        textSize(20);
        textAlign(CENTER, CENTER);
        text(theText ,width / 2 - 400, height / 2 + 280, 800);
        pop()
    },
    displayGraphHourPercent: function() {
        this.displayHour(this.data.dataHMinute)
        this.displayPercentTexts()
        this.mapTextsToDatas()
    }, 
    displayPercentTexts: function(){
        push()
        translate(this.x, this.y);
        this.percentages.forEach(function(percentage) {
            this.displayOnePercentText(percentage)
        }.bind(this));
        pop()
    },
    displayOnePercentText: function(data){
        push()
        textFont(FiraSansMedium);
        fill(255,255,255, 255)
        textSize(35);
        textAlign((data.posText.align ? RIGHT : LEFT), CENTER);
        text(data.pourcentage+" %" , data.posText.x, data.posText.y, 200);
        textSize(20);
        text(data.pourcentageText , data.posText.x, data.posText.y + 40, 200);
        pop()
    },
    mapTextsToDatas: function (){
        push()
        translate(this.x, this.y);
        this.percentages.forEach(function(percentage, i) {
            this.mapOneTextToData(percentage)
        }.bind(this));
        pop()
    },
    mapOneTextToData: function (data, i) {
        //tracé un trait droit de 30 px dans la bonne direction 
        var start = {
            x: data.posText.x + (data.posText.align ? 220 : -20),
            y: data.posText.y + 30
        }
        var middle = {
            x: data.posText.x + (data.posText.align ? 350 : -150),
            y: data.posText.y + 30
        }
        push()
        stroke('#fff')
        strokeWeight(1)
        line(start.x, start.y, middle.x, middle.y);
        pop()
        // si il y a des cercles mapper le trait jusqu'au cercle 
        if(this.isGraphPercentage) {
            push()
            stroke('#fff')
            strokeWeight(1)
            line(middle.x, middle.y, data.posSave.x ,data.posSave.y );
            pop()
        } else { //sinon tracer juqu'a une position donnée 
            push()
            stroke('#fff')
            strokeWeight(1)
            line(middle.x, middle.y, data.endLine.x ,data.endLine.y );
            pop()
        }
    },
    changeData: function(newData) {
        // Vider le tableau contenant les cercles
        this.percentages = []
        this.data = newData
        var percentages = newData.percentages 

        // Verifier que les stats sont des pourcentages
        if (percentages != null) {
            
                var nbPercentages = Object.keys(percentages).length
                for(var i = 0; i < nbPercentages; i++ ) {

                    var pourcentage = newData.percentages["pourcentage"+(i+1)]
                    var pourcentageText = newData.percentages["phrase"+(i+1)]
                    if(pourcentage != undefined) {
                        if (i == 0) {
                            this.upper = pourcentage
                        }
                        var pourcentage = pourcentage
                        var percentageObject = {
                            pos : this.posCircle[i],
                            posText : this.posText[i],
                            endLine : this.endLine[i],
                            pourcentage : pourcentage, 
                            posSave: {x: 0, y:0},
                            pourcentageText : pourcentageText, 
                            randX: 0, 
                            randY: 0
                        }
                        this.percentages.push(percentageObject)
                    }
                }

            // Verification du type de graphique    
            if (newData.dataHMinute == null ) {
                this.isGraphPercentage = true
                this.isGraphHour = false
                this.isGraphHourPercent = false
            } else {
                this.isGraphPercentage = false
                this.isGraphHour = false
                this.isGraphHourPercent = true
            }
        } else {
            this.isGraphPercentage = false
            this.isGraphHour = true
            this.isGraphHourPercent = false
        }
    }, 
    tween: function(i){
        rand = random(-10, 10)
        rand2 = random(-30, 30)
        TweenLite.to(i, 2, { randX: rand});
        TweenLite.to(i, 12, { randY: rand2});
    }

}
