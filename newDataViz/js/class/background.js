function Background( opt ) { 
    

    this.x = windowWidth/2
    this.y = windowHeight/2
    this.width = windowWidth + 300
    this.height = windowWidth + 300
    this.backgrounds = opt
    this.prevBg = 8
    this.actualBg = 0
    this.nextBg = 1
    this.scaleOld = 5
    this.scale = 1.2
    this.scaleNew = 0
    this.flow = null 
    this.isGradient = true
    this.bgColor = '#971154'


}

Background.prototype = {
    update: function () {
        if (this.isGradient) {
            push()
            translate(this.x, this.y)
            image(this.backgrounds[this.prevBg], 0, 0, (windowWidth + 300) * this.scaleOld , (windowWidth + 300)  * this.scaleOld)
            pop()

            push()
            translate(this.x, this.y)
            image(this.backgrounds[this.actualBg], 0, 0, (windowWidth + 300) * this.scale , (windowWidth + 300)  * this.scale)
            pop()

            push()
            translate(this.x, this.y)
            scale(this.scaleNew , this.scaleNew )
            image(this.backgrounds[this.nextBg], 0, 0, (windowWidth + 300) * this.scaleNew, (windowWidth + 300) * this.scaleNew  )
            pop()
        } else {
            background(this.bgColor)
        }
    }, 
    next: function () {
        this.flow = 'next'
        TweenLite.to(this, 1, {scale: 2})
        setTimeout(function () {
            var tween = TweenLite.to(customBackground, 1.5, {scaleNew: 1.1})
            tween.eventCallback("onComplete", this.endAnim, null, this)
        }.bind(this), 100)
    }, 
    prev: function () {
        this.flow = 'prev'
        TweenLite.to(this, 1, {scale: 5})
        setTimeout(function () {
            var tween = TweenLite.to(customBackground, 1.5, {scale: 0})
            var tween = TweenLite.to(customBackground, 1.5, {scaleOld: 1.3})
            tween.eventCallback("onComplete", this.endAnim, null, this)
        }.bind(this), 100)
    }, 
    displayHalfDay: function (isMorning) {
        this.isGradient = false
        if (isMorning) {
            this.bgColor = '#fc6c4f'
        } else {
            this.bgColor = '#3f80f5'
        }
    },
    backToGradient: function () {
        this.isGradient = true
    },
    displayDay: function (isMorning) {
        this.isGradient = false
        this.bgColor = '#330959'
    },
    endAnim: function () {
        this.scaleNew = 0
        this.scale = 1.2
        this.scaleOld = 5

        if (this.flow == 'next') {
            this.actualBg++
            this.nextBg++
            this.prevBg++ 
        }

        if (this.flow == 'prev') {
            this.actualBg--
            this.nextBg--
            this.prevBg--
        }


        if (this.prevBg == 9) { this.prevBg = 0 }
        if (this.prevBg == -1) { this.prevBg = 8 }
        if (this.nextBg == 9) { this.nextBg = 0 }
        if (this.nextBg == -1) { this.nextBg = 8 }
        if (this.actualBg == 9) { this.actualBg = 0 }
        if (this.actualBg == -1) { this.actualBg = 8 }

        
    }

}

