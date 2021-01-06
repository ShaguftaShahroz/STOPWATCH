
//define vars to hold time values
var seconds=0;
var minutes=0;
var hours=0;

//define vars to hold display values
var displaySec=0;
var displayMin=0;
var displayHours=0;

//define var to setInterval()
var interval=null;
//define var to set startstop status
var status="stopped";
//stopwatch fuction(logic to determine when to increment)
function stopWatch() {
    seconds++;
    if(seconds/60 ==1)
    {
        seconds=0;
        minutes++;
        if(minutes/60 ==1)
        {
            minutes=0;
            hours++;
        }
    }
//if seconds/minutes/hours is 0-9 then add an 0 in the beginning
if(seconds<10)
{
  displaySec="0"+seconds.toString();
}
else {
  displaySec=seconds;
}
if(minutes<10)
{
  displayMin="0"+minutes.toString();
}
else {
  displayMin=minutes;
}
if(hours<10)
{
  displayHours="0"+hours.toString();
}
else {
  displayHours=hours;
}
//display updated time values
document.getElementById("display").innerHTML=displayHours + ":" + displayMin + ":" + displaySec;
}

function startstop() {
  if (status=="stopped")
  {
    //start the stopwatch by calling the setInterval()
    interval=window.setInterval(stopWatch, 1000);
    document.getElementById("StartStop").innerHTML="Stop";
    status="started";
  }
  else {
    window.clearInterval(interval);
    document.getElementById("StartStop").innerHTML="Start";
    status="stopped";
  }
}
//funtion to reset the stopwatch
function reset()
{
  window.clearInterval(interval);
  seconds=0;
  minutes=0;
  hours=0;
  document.getElementById("display").innerHTML="00:00:00";
  document.getElementById("StartStop").innerHTML="Start";

}
