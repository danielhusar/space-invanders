(function(window, document, $){
  'use strict';

  var APP = window.APP = function(){
    this.canvas = $('canvas')[0];
    this.context = this.canvas.getContext('2d');
    this.width = $('canvas').width();
    this.height = $('canvas').height();

    this.plane = {
      x: this.width/2 - 25,
      y: this.height - 80
    };

    this.init();
  };

  var FN = APP.prototype;

  FN.init = function(){
    this.drawPlane(this.plane.x,  this.plane.y);
  };

  FN.drawPlane = function(x, y){
    var img = new window.Image();
    img.onload = function(){
      this.context.clearRect(0, 0, this.width, this.height);
      this.context.drawImage(img, x, y);
    }.bind(this);
    img.src = 'assets/space-ship.png';
  };


  var instance = new APP();

  (function animloop(){
    requestAnimationFrame(animloop);
    instance.init();
  })();




})(this, this.document, this.jQuery);
