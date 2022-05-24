var Azzura=0;
var Steve=255;

function setup() {
  createCanvas(400, 400);
}

//The draw function happens over and over again
function draw() {
  background(224,Azzura,255); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(5);
  fill(51,255,123,Steve); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,200,Azzura,100); // center of canvas, 20px dia

  fill(255,51,92);
  ellipse(mouseX,mouseY,50,50);
  line(mouseX,20,mouseY,200);
}

 function mousePressed(){
  if (Azzura=>100){
    Azzura=0;
  }else{
    Azzura=Azzura+10;
  }

  Steve=Steve-5
}