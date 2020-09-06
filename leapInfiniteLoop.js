var controllerOptions = {};

var i = 0;

Leap.loop(controllerOptions, function(frame)
{
      if (frame.hands.length==1)
      {
        console.log(frame.hands[0]);
        var hand = frame.hands[0];
      }

    i++;

}
);
