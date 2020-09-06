var controllerOptions = {};

var i = 0;

Leap.loop(controllerOptions, function(frame)
{
      if (frame.hands.length==1)
      {
        console.log(frame.hands[0]);
        var hand = frame.hands[0];
        var fingers = hand.fingers;
        console.log(fingers);
        hand.fingers.forEach(function(finger)
        {
          console.log(finger);
        });
      //  var thumb = hand.thumb;
        var index = hand.indexFinger;
        //var middle = hand.middleFinger;
        //var thirdFinger = hand.ringFinger;
        //var pinkyFinger = hand.pinky;
        console.log("Index Finger is:", index);
      }
    i++;
}
);
