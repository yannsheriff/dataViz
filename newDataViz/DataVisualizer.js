function DataVisualizer(data) { 
    
    this.data = data
    this.upper = 0;
    this.isGraphPercentage = false
    this.isGraphHour = true
    this.radiusImg = 450
    this.radius = 435
    this.x = width / 2
    this.y = height / 2
    this.percentages = []
    this.count = 0
    this.pos = [
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

}

DataVisualizer.prototype = {
    update: function () {
        if (this.isGraphPercentage) { 
            translate(this.x, this.y);
            this.displayPercentages() 
        }
        if (this.isGraphHour) { this.displayGraphHour() }

        // this.displayLegend()
    }, 
    displayPercentages: function() {
        this.percentages.forEach(function(percentage) {
            this.displayOnePercentage(percentage)
        }.bind(this));
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
        circle = arc(circle.pos.x + circle.randX, circle.pos.y + circle.randY * 2, circle.pourcentage * 2, circle.pourcentage * 2, 0, 2 * PI );
        pop()
    }, 
    displayGraphHour: function(){
        this.displayHour("07:30")
        this.displayLeftText("le premier se leve a")
        this.displayRightText("le premier se leve a")
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
    displayLeftText: function(theText){
        push()
        textFont(FiraSansMedium);
        fill(255,255,255, 255)
        textSize(20);
        textAlign(RIGHT, CENTER);
        text(theText ,width / 2 - 400, height / 2 - 20);
        textSize(50);
        text("6h30" ,width / 2 - 400, height / 2 + 20 );
        pop()
    },
    displayRightText: function(theText){
        push()
        textFont(FiraSansMedium);
        fill(255,255,255, 255)
        textSize(20);
        textAlign(LEFT, CENTER);
        text(theText ,width / 2 + 400, height / 2 - 20);
        textSize(50);
        text("6h30" ,width / 2 + 400, height / 2 + 20 );
        pop()
    },
    // displayLegend: function(theText){
    //     push()
    //     textFont(FiraSansMedium);
    //     fill(255,255,255, 255)
    //     textSize(20);
    //     textAlign(CENTER, CENTER);
    //     text(theText ,width / 2 , height / 2 + 400);
    //     pop()
    // },
    changeData: function(newData) {
        // Vider le tableau contenant les cercles
        this.percentages = []
        this.data = newData
        var percentages = newData.percentages 

        // Verifier que les stats sont des pourcentages
        if (percentages != null) {

            // Verifier que l'on doit afficher un graphe avec des boules
            if (newData.dataHMinute == null ) {
                this.isGraphPercentage = true
                this.isGraphHour = false

                var nbPercentages = Object.keys(percentages).length
                for(var i = 0; i < nbPercentages; i++ ) {

                    var pourcentage = newData.percentages["pourcentage"+(i+1)]
                    if(pourcentage != undefined) {
                        if (i == 0) {
                            this.upper = pourcentage
                        }
                        var pourcentage = pourcentage
                        var percentageObject = {
                            pos : this.pos[i],
                            pourcentage : pourcentage, 
                            randX: 0, 
                            randY: 0
                        }
                        this.percentages.push(percentageObject)
                    }
                }
            }
        } else {
            this.isGraphPercentage = false
            this.isGraphHour = true
        }
    }, 
    tween: function(i){
        rand = random(-10, 10)
        rand2 = random(-30, 30)
        TweenLite.to(i, 2, { randX: rand});
        TweenLite.to(i, 12, { randY: rand2});
    }

}
