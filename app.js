(function(window, document, $){
  'use strict';

  var APP = window.APP = function(){
    this.canvas = $('canvas')[0];
    this.context = this.canvas.getContext('2d');
    this.width = $('canvas').width();
    this.height = $('canvas').height();
    this.keys = [];

    this.plane = {
      x: this.width/2 - 25,
      y: this.height - 80,
      step: 3
    };

    this.init();
    this.bindings();
  };

  var FN = APP.prototype;

  FN.init = function(){
    this.drawPlane(this.plane.x,  this.plane.y);

    if (this.keys[37]) {
      this.plane.x -= this.plane.step;
      if(this.plane.x < 0){
        this.plane.x = 0;
      }
    }
    if (this.keys[39]) {
      this.plane.x += this.plane.step;
      if(this.plane.x > this.width - 50){
        this.plane.x = this.width - 50;
      }
    }
  };

  FN.drawPlane = function(x, y){
    var img = new window.Image();
    img.onload = function(){
      this.context.clearRect(0, 0, this.width, this.height);
      this.context.drawImage(img, x, y);
    }.bind(this);
    img.src = 'assets/space-ship.png';
  };

  FN.bindings = function(){
    $(document).keydown(function(e){
      this.keys[e.keyCode] = true;
    }.bind(this));
    $(document).keyup(function(e){
      this.keys[e.keyCode] = false;
    }.bind(this));
  };


  var instance = new APP();

  (function animloop(){
    requestAnimationFrame(animloop);
    instance.init();
  })();




})(this, this.document, this.jQuery);
