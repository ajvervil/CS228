var controllerOptions = {};

var i = 0;

var circle_diameter=50;
var rawXMin = 0+circle_diameter/2;
var rawXMax = window.innerWidth-circle_diameter/2;
var rawYMin = 0+circle_diameter/2;
var rawYMax = window.innerHeight-circle_diameter/2;

var appWidth = (rawXMax-rawXMin);
var appHeight = (rawYMax-rawYMin);



Leap.loop(controllerOptions, function(frame)
{
//  var iBox = frame.interactionBox;
//  var pointable = frame.pointables[0];

    clear();
    HandleFrame(frame);
}
);
