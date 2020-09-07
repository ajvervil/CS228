var controllerOptions = {};

var i = 0;

var rawXMin = window.innerWidth;
var rawXMax = 0;
var rawYMin = window.innerHeight;
var rawYMax = 0;

Leap.loop(controllerOptions, function(frame)
{
    clear();
    HandleFrame(frame);
}
);
