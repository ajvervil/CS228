function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {
  background(220);

  var x = window.innerWidth/2;
  var y = window.innerHeight/2;

  // Draw a circle
  circle(x,y,50);
}
