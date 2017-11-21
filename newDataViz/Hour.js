function Hour(data) { 
    
    this.width = 250
    this.height = 60
    this.x = windowWidth / 2 - this.width / 2
    this.y = 50
    this.actualHour = 0
    this.actualColor = 0
    this.data = data

}

Hour.prototype = {
    update: function () {
        push()
        fill(255,255,255, 150)
        noStroke()
        translate(this.x, this.y);
        cadre = rect(0, 0,this.width, this.height, 27);
        fill(this.data[this.actualColor].fontColor);
        textFont(BebasNeueBook);
        textSize(36);
        text(this.data[this.actualHour].horaire, 55, 43);
        pop()
    }, 
    next: function () {
        if (this.actualHour < 8) {
            this.actualHour++
            setTimeout(function() { this.actualColor++ }.bind(this), 1500) 
        } else { 
            this.actualHour = 0
            setTimeout(function() { this.actualColor = 0 }.bind(this), 1500) 
        }
    }, 
    prev: function() {
        if (this.actualHour > 0 ) {
            this.actualHour--
            setTimeout(function() { this.actualColor-- }.bind(this), 1500) 
        } else { 
            this.actualHour = 8
            setTimeout(function() { this.actualColor = 8}.bind(this), 1500) 
        }
    }
}