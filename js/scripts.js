// // back-end logic
var inputNumbers =[1,2,3,5,6,15,21];
var pingPongNumbers = inputNumbers.map(function(inputNumber) {
  return inputNumber*2;
});
var loopCount = 0;
var playUntil = parseInt($("#until-number").val());
while (loopCount<=playUntil) {
  console.log('#',loopCount);
  loopCount++;
  if ((inputNumber%15) === 0) {
  console.log ('ping-pong');
  } else if ((inputNumber%5) === 0) {
  console.log ('pong');
  } else if ((inputNumber%3) === 0) {
  console.log ('ping');
  } else {
  console.log (inputNumbers);
  }
}
// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $(inputNumbers).val("#until-number");
    $('#pong').show();
    $('#result').text(inputNumbers[5]);
    // $('#result').append(' ' + pingPongNumbers() + ', ');
  });
});
