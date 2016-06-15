// // back-end logic
var inputNumbers =[1,2,3,4,5,6,15,21];

var pingPongNumbers = inputNumbers.map(function(inputNumber) {
  return inputNumber*2;
});
alert(pingPongNumbers);

var loopCount = 0;
while (loopCount<=playUntil) {
  console.log('#',loopCount);
  loopCount++;
  if ((inputNum%15) === 0) {
  // console.log ('ping-pong');
  } else if ((inputNum%5) === 0) {
  // console.log ('pong');
  } else if ((inputNum%3) === 0) {
  // console.log ('ping');
  } else {
  // console.log (inputNum);
  }
}

// front-end logic
var playUntil = $("#until-number").val();

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('#pong').show();



    $('#result').append('congratulations');
    // $('#result').append(' ' + pingPongNumbers() + ', ');
  });
});
