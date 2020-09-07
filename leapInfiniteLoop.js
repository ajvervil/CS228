var controllerOptions = {};

var i = 0;
//var x = window.innerWidth/2;
//var y = window.innerHeight/2;
//draw(x,y);

Leap.loop(controllerOptions, function(frame)
{
    clear();
    HandleFrame(frame);
}
);
