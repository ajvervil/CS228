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
  clear();
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
}
function HandleHand(hands) {
  var hand = hands[0];
  console.log("Hand is:", hand);
  HandleFinger(hand.indexFinger);
}
function HandleFrame(frame) {
  if (frame.hands.length==1)
  {
    HandleHand(frame.hands);
  }
i++;

}
