function DataVisualizer(data) { 
    
    this.data = data
    this.upper = 0;
    this.isPercentage = true
    this.radiusImg = 450
    this.radius = 435
    this.x = width / 2
    this.y = height / 2
    this.percentages = []
    this.count = 0
    this.pos = [
        {
            x: -60,
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
        translate(this.x, this.y);
        if (this.isPercentage) { this.displayPercentages() }
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
    changeData: function(newData){
        var nbPercentages = Object.keys(newData.percentages).length
        for(var i = 0; i < nbPercentages; i++ ) {
            if (i == 0) {
                this.upper = newData.percentages["pourcentage"+(i+1)]
            }
            var pourcentage = newData.percentages["pourcentage"+(i+1)]
            var percentageObject = {
                pos : this.pos[i],
                pourcentage : pourcentage, 
                randX: 0, 
                randY: 0
            }
            this.percentages.push(percentageObject)
        }
    }, 
    tween: function(i){
        rand = random(-10, 10)
        rand2 = random(-30, 30)
        TweenLite.to(i, 2, { randX: rand});
        TweenLite.to(i, 12, { randY: rand2});
    }

}
