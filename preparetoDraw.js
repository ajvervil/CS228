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
function HandleHand(hand) {
  console.log(frame.hands[0]);
  var hand = frame.hands[0];
  var fingers = hand.fingers;
//    console.log(fingers);
//    hand.fingers.forEach(function(finger)
//    {
//      console.log(finger);
//    });
  var index = hand.indexFinger;
  console.log("Index Finger is:", index); // same element as finger[1]

}
function HandleFrame(frame) {
  if (frame.hands.length==1)
  {
    console.log(frame.hands[0]);
    var hand = frame.hands[0];
    var fingers = hand.fingers;
    var index = hand.indexFinger;
    console.log("Index Finger is:", index); // same element as finger[1]
//    var hand = frame.hands[0];
//    HandleHand(HandleFrame::hand);
  }
i++;

}
