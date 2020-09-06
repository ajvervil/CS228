var controllerOptions = {};

var i = 0;

Leap.loop(controllerOptions, function(frame)
{
  //console.log(frame);
//  console.log(frame.hands[i]);
for(var h = 0; h < frame.hands.length; h++){
    var hand = frame.hands[h];
    console.log(frame.hands[h]);
}
    i++;
/*
  console.log("Hello begining of Leap.loop"); //DEBUG

  console.log(i);
  i++;
  clear();
  draw();
  console.log("Hello end Leap.loop"); //DEBUG
  */
}
);
