function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(220); // grey background
}
function getRandomIntInclusive(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1) + min);
}
//function draw()
//{
//  // for initial part of this lab
//  var x = window.innerWidth/2;
//  var y = window.innerHeight/2;
//
//  x+=getRandomIntInclusive(-1,1);
//  y+=getRandomIntInclusive(-1,1);
//}

function HandleBone(bone,finger) {
var bone_end = bone.nextJoint;  //The distal end of the bone closest to the finger tip.
var bone_start = bone.prevJoint;//The proximal end of the bone closest to the torso.

   x_joint = bone.nextJoint[0];
   y_joint = bone.nextJoint[1];
   z_joint = bone.nextJoint[2];

/////
//var my_finger = bone.finger;
var iBox = bone.finger.frame.interactionBox;
//var iBox = leap.frame.interactionBox; // -> can't find variable leap
//var iBox = finger.frame.interactionBox;

//var pointable = finger.frame.pointables[finger.type]; // display tip of each fingers
//var pointable = finger.frame.pointables[bone.type]; // display all pinky's bone
var pointable = finger.frame.pointables[bone.finger.type]; // display tip of each fingers

var leapPoint = pointable.stabilizedTipPosition;
var normalizedPoint = iBox.normalizePoint(leapPoint, true);

var appX = normalizedPoint[0] * appWidth;
var appY = (1 - normalizedPoint[1]) * appHeight;
//The z-coordinate is not used
/////
//    console.log("HandleBone - Tip - x= ", x_basis, " - y=", y_basis, " - z=", z_basis);
//    circle(x_basis,y_basis,circle_diameter);
    console.log("HandleBone - Tip - x_joint= ", x_joint, " - y_joint=", y_joint, " - z=", z_joint);
    console.log("HandleBone - Tip - x= ", appX, " - y=", appY, " - z=", z_joint);
    circle(appX,appY,circle_diameter);
////

}

function HandleFinger(finger) {

//https://developer-archive.leapmotion.com/documentation/v2/javascript/devguide/Leap_Coordinate_Mapping.html

var iBox = finger.frame.interactionBox;
var pointable = finger.frame.pointables[finger.type];

var leapPoint = pointable.stabilizedTipPosition;
var normalizedPoint = iBox.normalizePoint(leapPoint, true);

var appX = normalizedPoint[0] * appWidth;
var appY = (1 - normalizedPoint[1]) * appHeight;
//The z-coordinate is not used

  // https://www.geeksforgeeks.org/p5-js-circle-function/
  var this_finger_type = finger.type;
  var c = color('white');

  switch(this_finger_type) {
    case 0: //TYPE_THUMB:
      c = color('black');
      break;
    case 1: //TYPE_INDEX:
      c = color('blue');
      break;
    case 2: //TYPE_MIDDLE:
      c = color('green');
      break;
    case 3: //TYPE_RING:
      c = color('yellow');
      break;
    case 4: //TYPE_PINKY:
      c = color('brown');
      break;
    default:
      c = color('white');
    break;
  }
  // Use fill() function to fill color
  fill(c);

  var bones = finger.bones;
  console.log("HandleFinger - bones are: ", bones);

  bones.forEach(function(bone){
    console.log("HandleFinger - this bone is: ", bone);
    HandleBone(bone,finger);
  });

//  circle(appX,appY,circle_diameter);
//  console.log("HandleFinger draw circle around finger=", finger, " finger type=", finger.type, " at (", appX, ",",appY,")"  );  // debug
}

function HandleHand(hand) {
  var fingers=hand.fingers;
  console.log("HandleHand - fingers is:", fingers);  // debug
  fingers.forEach(function(finger){
        HandleFinger(finger); // hand.indexFinger
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
