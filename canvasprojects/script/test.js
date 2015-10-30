"use strict";

$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    var boxX = -100;
    var boxY = -100;
    var context = canvas.getContext("2d")
    var mouseX = 0;
    var mouseY = 0;
    var boxWidth = 50;
    var boxHeight = 50;
    var colors = ["yellow", "blue", "green", "red", "pink", "brown"];
    
    
    
    function initiate(){
      
      
      
      
      
       window.requestAnimationFrame(draw);
    }





function draw(){
  context.beginPath();
  context.rect(boxX, boxY, boxWidth, boxHeight);
  shuffleArray(colors);
  context.fillStyle = colors[1];
  context.fill();

  
   
    
    window.requestAnimationFrame(draw);

}




canvas.addEventListener("mousemove", function(e){
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        totalOffsetX += canvas.offsetLeft - canvas.scrollLeft;
        totalOffsetY += canvas.offsetTop - canvas.scrollTop;
        mouseX = e.pageX - totalOffsetX;
        mouseY = e.pageY - totalOffsetY; 
        boxX = (mouseX - boxWidth/2);
        boxY = (mouseY - boxHeight/2);
        console.log(mouseX, mouseY);
        
    
});






initiate();
})