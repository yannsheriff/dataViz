function Hour() { 
    
    this.width = 250
    this.height = 60
    this.x = windowWidth / 2 - this.width / 2
    this.y = 50
    this.color = "#660954"
    this.actualHour = 0
    this.actualColor = 0
    this.left = 55
    this.hours = [
        {
            horaire : "06:00 - 08:00",
            fontColor: "#660954"
        },
        {
            horaire : "08:00 - 10:00",
            fontColor: "#dc5b60"
        },
        {
            horaire : "10:00 - 12:00",
            fontColor: "#fdb57a"
        },
        {
            horaire : "12:00 - 14:00",
            fontColor: "#819fd2"
        },
        {
            horaire : "14:00 - 16:00",
            fontColor: "#bda3be"
        },
        {
            horaire : "16:00 - 18:00",
            fontColor: "#fd6e6b"
        },
        {
            horaire : "18:00 - 21:00",
            fontColor: "#781f56"
        },
        {
            horaire : "21:00 - 23:00",
            fontColor: "#20033a"
        },
        {
            horaire : "23:00 - 02:00",
            fontColor: "#0c0645"
        }
    ]
    this.text = this.hours[this.actualHour].horaire
}

Hour.prototype = {
    update: function () {
        push()
        fill(255,255,255, 150)
        noStroke()
        translate(this.x, this.y);
        cadre = rect(0, 0,this.width, this.height, 27);
        fill(this.color);
        textFont(BebasNeueBook);
        textSize(36);
        textAlign(CENTER, CENTER);
        text(this.text, 0, 0, this.width, this.height);
        pop()
    }, 
    next: function () {
        if (this.actualHour < 8) {
            this.actualHour++
            this.text = this.hours[this.actualHour].horaire
            setTimeout(function() { 
                this.actualColor++ 
                this.color = this.hours[this.actualColor].fontColor
            }.bind(this), 1500) 
        } else { 
            this.actualHour = 0
            this.text = this.hours[this.actualHour].horaire
            setTimeout(function() { this.actualColor = 0 }.bind(this), 1500) 
        }
    }, 
    prev: function() {
        if (this.actualHour > 0 ) {
            this.actualHour--
            this.text = this.hours[this.actualHour].horaire
            setTimeout(function() { 
                this.actualColor-- 
                this.color = this.hours[this.actualColor].fontColor
            }.bind(this), 1500) 
        } else { 
            this.actualHour = 8
            this.text = this.hours[this.actualHour].horaire
            setTimeout(function() { this.actualColor = 8}.bind(this), 1500) 
        }
    }, 
    displayActualHour: function() {
        this.text = this.hours[this.actualHour].horaire
        this.color = this.hours[this.actualColor].fontColor
    },
    displayScreen: function (text, color) {
            this.text = text
            this.color = color
    },
    unDisplayHalfDay: function () {
        this.left = 55
        this.text = this.hours[this.actualHour].horaire
    }
}