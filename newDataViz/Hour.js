function Hour(data) { 
    
    this.width = 250
    this.height = 60
    this.x = windowWidth / 2 - this.width / 2
    this.y = 50
    this.actualHour = 0
    this.actualColor = 0
    this.data = data
    this.text = this.data[this.actualHour].horaire
    this.left = 55

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
        text(this.text, this.left, 43);
        pop()
    }, 
    next: function () {
        if (this.actualHour < 8) {
            this.left = 55
            this.actualHour++
            this.text = this.data[this.actualHour].horaire
            setTimeout(function() { this.actualColor++ }.bind(this), 1500) 
        } else { 
            this.left = 55
            this.actualHour = 0
            this.text = this.data[this.actualHour].horaire
            setTimeout(function() { this.actualColor = 0 }.bind(this), 1500) 
        }
    }, 
    prev: function() {
        if (this.actualHour > 0 ) {
            this.left = 55
            this.actualHour--
            this.text = this.data[this.actualHour].horaire
            setTimeout(function() { this.actualColor-- }.bind(this), 1500) 
        } else { 
            this.left = 55
            this.actualHour = 8
            this.text = this.data[this.actualHour].horaire
            setTimeout(function() { this.actualColor = 8}.bind(this), 1500) 
        }
    }, 
    displayHalfDay: function (isMorning) {
        if (isMorning) {
            this.left = 90
            this.text = 'Matin'
        } else {
            this.left = 90
            this.text = 'Aprèm'
        }
    },
    unDisplayHalfDay: function () {
        this.left = 55
        this.text = this.data[this.actualHour].horaire
    }
}