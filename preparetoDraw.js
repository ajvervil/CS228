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
  circle(x,y,50);
}

function HandleFinger(indexFinger) {
  console.log("Index Finger is:", indexFinger); // same element as finger[1]
  console.log("tipPosition is:", indexFinger.tipPosition); //
  var x = indexFinger.tipPosition[0];
  var y = indexFinger.tipPosition[1];
  var z = indexFinger.tipPosition[2];
  console.log("tipPosition coordinates - x:", x, "tipPosition coordinates - y:", y,"tipPosition coordinates - z:", z); //
  return indexFinger.tipPosition;
}
/*
function HandleFinger(indexFinger,x,y) {
  console.log("Index Finger is:", indexFinger); // same element as finger[1]
  console.log("tipPosition is:", indexFinger.tipPosition); //
  var x = indexFinger.tipPosition[0];
  var y = indexFinger.tipPosition[1];
  var z = indexFinger.tipPosition[2];
  console.log("tipPosition coordinates - x:", x, "tipPosition coordinates - y:", y,"tipPosition coordinates - z:", z); //
  return indexFinger.tipPosition;
}
*/
function HandleHand(hands,x,y) {
  var hand = hands[0];
  console.log("Hand is:", hand);
  return HandleFinger(hand.indexFinger,x,y);
}
function HandleFrame(frame) {
  var x = window.innerWidth/2;
  var y = window.innerHeight/2;

  if (frame.hands.length==1)
  {
    currentPosition=HandleHand(frame.hands,x,y);
  }
  draw();
i++;

}
