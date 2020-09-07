function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
//  background(220); // grey background
}
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1) + min);
}
function draw() {
  var x = window.innerWidth/2;
  var y = window.innerHeight/2;

  x+=getRandomIntInclusive(-1,1);
  y+=getRandomIntInclusive(-1,1);

  // Draw a circle
//  circle(x,y,50);
}

function HandleFinger(indexFinger) {
//  console.log("Index Finger is:", indexFinger); // same element as finger[1]
//  console.log("tipPosition is:", indexFinger.tipPosition); //
  var x = indexFinger.tipPosition[0];
  var y = (window.innerHeight - indexFinger.tipPosition[1]); //
  var z = indexFinger.tipPosition[2];
console.log("...rawXMin:", rawXMin, " , rawXMax:", rawXMax," , rawYMin:", rawYMin," , rawYMax:", rawYMax); //
console.log("Raw tipPosition coordinates x:", x, " Read y: ", indexFinger.tipPosition[1], "tipPosition coordinates y:", y,"tipPosition coordinates z:", z); //
//  if (x<rawXMin) x=rawXMin;
//  if (x>rawXMax) x=rawXMax;
//  if (y<rawYMin) y=rawYMin;
//  if (y>rawYMax) y=rawYMax;
//  if (z<rawYMin) z=rawYMin;
//  if (z>rawYMax) z=rawYMax;

  circle(x,y,50);
//  circle(0,0,50);  // upper left
//  circle(0,window.innerHeight,50);  // cannot see
//  circle(0,window.innerHeight/2,50);  // half height on the left
//  circle(window.innerWidth,window.innerHeight/2,50);  // half height on the right
//  circle(window.innerWidth/2,window.innerHeight/2,50);  // half height , half...
  console.log("Corrected tipPosition coordinates x:", x, "tipPosition coordinates y:", y,"tipPosition coordinates z:", z); //

}

function HandleHand(hands) {
  var hand = hands[0];
//  console.log("Hand is:", hand);
  HandleFinger(hand.indexFinger);
}
function HandleFrame(frame) {

  if (frame.hands.length==1)
  {
    HandleHand(frame.hands);
  }
//  draw();
i++;

}
