var controllerOptions = {};

var i = 0;

var circle_diameter=50;
var rawXMin = 0+circle_diameter/2;
var rawXMax = window.innerWidth-circle_diameter/2;
var rawYMin = 0+circle_diameter/2;
var rawYMax = window.innerHeight-circle_diameter/2;

//https://developer-archive.leapmotion.com/documentation/v2/javascript/devguide/Leap_Coordinate_Mapping.html
var appWidth  = rawXMax;
var appHeight = rawYMax;

Leap.loop(controllerOptions, function(frame)
{

    clear();
    HandleFrame(frame);
}
);
