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

function HandleFinger(indexFinger) {

//https://developer-archive.leapmotion.com/documentation/v2/javascript/devguide/Leap_Coordinate_Mapping.html
var iBox = indexFinger.frame.interactionBox;
var pointable_x = indexFinger.frame.pointables[0];
var leapPoint_x = pointable_x.stabilizedTipPosition;
var pointable_y = indexFinger.frame.pointables[1];
var leapPoint_y = pointable_y.stabilizedTipPosition;
var pointable_z = indexFinger.frame.pointables[2];
var leapPoint_z = pointable_z.stabilizedTipPosition;
var normalizedPoint = iBox.normalizePoint(leapPoint_x, leapPoint_y,leapPoint_z, true);

var x = normalizedPoint[0] * appWidth;
var y = (1 - normalizedPoint[1]) * appHeight; //
var z = indexFinger.tipPosition[2]; //The z-coordinate is not used

//console.log("...rawXMin:", rawXMin, " , rawXMax:", rawXMax," , rawYMin:", rawYMin," , rawYMax:", rawYMax); //
//console.log("Raw tipPosition coordinates x:", x, " Read y: ", indexFinger.tipPosition[1], "tipPosition coordinates y:", y,"tipPosition coordinates z:", z); //
  if (x<rawXMin) x=rawXMin;
  if (x>rawXMax) x=rawXMax;
  if (y<rawYMin) y=rawYMin;
  if (y>rawYMax) y=rawYMax;
//  if (z<rawYMin) z=rawYMin; //The z-coordinate is not used
//  if (z>rawYMax) z=rawYMax;

  // https://www.geeksforgeeks.org/p5-js-circle-function/
  background(220);
  // Use color() function
  let c = color('green');
  // Use fill() function to fill color
  fill(c);

  circle(x,y,circle_diameter);
  //console.log("Corrected tipPosition coordinates x:", x, "tipPosition coordinates y:", y,"tipPosition coordinates z:", z); //

}

function HandleHand(hands) {
  var hand = hands[0];
//  console.log("Hand is:", hand);  // debug
  HandleFinger(hand.indexFinger);
}
function HandleFrame(frame) {

  if (frame.hands.length==1)
  {
    HandleHand(frame.hands);
  }
i++;

}
