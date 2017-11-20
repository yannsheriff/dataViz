function Circle( opt ) { 
    
    this.position = vec2.fromValues(opt.x, opt.y)

    this.x = opt.x
    this.y = opt.y
    this.rotate = 0;


}

Circle.prototype = {
    update: function () {
        ctx.save()
        ctx.translate( this.x, this.y )
        this.rotate += 0.02;
        ctx.rotate( this.rotate )
        this.render()
        ctx.restore()
    }, 
    
    render: function() {
        ctx.strokeStyle = '#fff'
        ctx.lineWidth=5;

        ctx.beginPath()
        ctx.arc(0,0,280,0,1.5 * Math.PI,true);
        ctx.stroke();
        ctx.closePath()

        // ctx.beginPath()
        // ctx.arc(0,0,280,1.8* Math.PI,1.9 * Math.PI,true);
        // ctx.stroke();
        // ctx.closePath()


        ctx.beginPath()
        ctx.arc(0,0,250,0,2 * Math.PI,true);
        ctx.stroke();

        // ctx.arc(100,75,50,0,2*Math.PI);
        // ctx.stroke();
        // ctx.closePath()

        console.log("ok");
        
        }
    }

