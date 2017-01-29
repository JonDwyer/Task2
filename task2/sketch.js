

function setup() {
 createCanvas(460, 460);
 background(255);
}



var value = 0;

function draw() {
  fill(value);
  noStroke();

  
 triangle(30, 75, 58, 20, 86, 75);
 triangle(30, 150, 58, 95, 86, 150);
 triangle(30, 225, 58, 170, 86, 225);
 triangle(30, 300, 58, 245, 86, 300);
 triangle(30, 375, 58, 320, 86, 375);
 
 triangle(116, 75, 144, 20, 172, 75);
 triangle(116, 150, 144, 95, 172, 150);
 triangle(116, 225, 144, 170, 172, 225);
 triangle(116, 300, 144, 245, 172, 300);
 triangle(116, 375, 144, 320, 172, 375);

 triangle(202, 75, 230, 20, 258, 75);
 triangle(202, 150, 230, 95, 258, 150);
 triangle(202, 225, 230, 170, 258, 225);
 triangle(202, 300, 230, 245, 258, 300);
 triangle(202, 375, 230, 320, 258, 375);
 
 triangle(288, 75, 316, 20, 344, 75);
 triangle(288, 150, 316, 95, 344, 150);
 triangle(288, 225, 316, 170, 344, 225);
 triangle(288, 300, 316, 245, 344, 300);
 triangle(288, 375, 316, 320, 344, 375);
 
 triangle(374, 75, 402, 20, 430, 75);
 triangle(374, 150, 402, 95, 430, 150);
 triangle(374, 225, 402, 170, 430, 225);
 triangle(374, 300, 402, 245, 430, 300);
 triangle(374, 375, 402, 320, 430, 375);

}

function mouseMoved() {
  value = value + 2;
  if (value > 255) {
    value = 0;
  }

}



  


