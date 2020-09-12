var controllerOptions = {};

var i = 0;

var circle_diameter=50;
var circle_radius=50/2;
var rawXMin = 0+circle_radius;
var rawXMax = window.innerWidth-circle_radius;
var rawYMin = 0+circle_radius;
var rawYMax = window.innerHeight-circle_radius;

//https://developer-archive.leapmotion.com/documentation/v2/javascript/devguide/Leap_Coordinate_Mapping.html
var appWidth  = rawXMax;
var appHeight = rawYMax;

Leap.loop(controllerOptions, function(frame)
{

    clear();
    HandleFrame(frame);
}
);
