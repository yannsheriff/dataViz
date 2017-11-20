  window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;

    var canvasWith = window.innerWidth;
    var canvasHeight = window.innerHeight;



    /**
      Time stuff
    */
    var DELTA_TIME = 0;
    var LAST_TIME = Date.now();

    /**
      Canvas stuff
    */
    var canvas
    var ctx

    var circle 
  
    


    

    var opts = {
      barWidth: 10
    }

    function initCanvas() {

      canvas = document.querySelector('canvas')
      ctx = canvas.getContext('2d')
      onResize()
        
      var opt = {
          x:     canvas.width/2, 
          y:     canvas.height/2,
      }
      circle = new Circle(opt)
      frame()


    }




    /**
     * addListeners
     */
    function addListeners() {

      window.addEventListener( 'resize', onResize.bind(this) );
      rafId = requestAnimationFrame( frame )

    }

    /**
     * update
     * - Triggered on every TweenMax tick
     */
    function frame() {

      rafId = requestAnimationFrame( frame )
      ctx.clearRect( 0, 0, canvasWith, canvasHeight )

      circle.update()

    }


    /**
     * onResize
     * - Triggered when window is resized
     * @param  {obj} evt
     */
    function onResize( evt ) {

      canvasWith = window.innerWidth;
      canvasHeight = window.innerHeight;

      canvas.width = canvasWith
      canvas.height = canvasHeight
      canvas.style.width = canvasWith + 'px'
      canvas.style.height = canvasHeight + 'px'

    }

    
    initCanvas()

