var controllerOptions = {};

var i = 0;

Leap.loop(controllerOptions, function(frame)
{
  console.log("Hello begining of Leap.loop");

  console.log(i);
  i++;
  clear();
  draw();
  console.log("Hello end Leap.loop");
}
);
