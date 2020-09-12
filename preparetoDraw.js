function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(220); // grey background
}
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1) + min);
}
function draw()
{
  // for initial part of this lab
  var x = window.innerWidth/2;
  var y = window.innerHeight/2;

  x+=getRandomIntInclusive(-1,1);
  y+=getRandomIntInclusive(-1,1);
}

function HandleFinger(finger) {

//https://developer-archive.leapmotion.com/documentation/v2/javascript/devguide/Leap_Coordinate_Mapping.html
console.log("appWidth=", appWidth, " appHeight=", appHeight  );  // debug
console.log("HandleFinger - finger=", finger, " finger type", finger.type  );  // debug

var iBox = finger.frame.interactionBox;
var pointable = finger.frame.pointables[0];

var leapPoint = pointable.stabilizedTipPosition;
var normalizedPoint = iBox.normalizePoint(leapPoint, true);

var appX = normalizedPoint[0] * appWidth;
var appY = (1 - normalizedPoint[1]) * appHeight;
//The z-coordinate is not used

console.log("HandleFinger: rawXMin=", rawXMin, " rawXMax=", rawXMax, " rawYMin=", rawYMin, " rawYMax=", rawYMax );  // debug

  // https://www.geeksforgeeks.org/p5-js-circle-function/
  // Use color() function
  let c = color('green');
  // Use fill() function to fill color
  fill(c);
  circle(appX,appY,circle_diameter);
}

function HandleHand(hand) {
  //console.log("Hand is:", hand);  // debug
  var fingers=hand.fingers;
  console.log("fingers is:", fingers);  // debug
  fingers.forEach(function(finger){
      console.log("Finger ", finger.type," is:", finger);  // debug
//      if(finger.type == 1) {
//        console.log("Index Finger type:", finger.type," - finger element:", finger);  // debug
        HandleFinger(finger); // hand.indexFinger
//      }
  });
}
function HandleFrame(frame) {
  // if only 1 hand in front of device
  if (frame.hands.length==1)
  {
    var hand = frame.hands[0];
    HandleHand(hand);
  }
i++;

}
