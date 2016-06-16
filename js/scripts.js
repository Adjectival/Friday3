// // back-end logic
var inputNumber = "";
var loopCount = 1;
var playUntil = parseInt($("#until-number").val());
while (loopCount<=playUntil) {
  loopCount++;
  if ((inputNumber%15) === 0) {
  inputNumber = inputNumber + "ping-pong";
  } else if ((inputNumber%5) === 0) {
  inputNumber = inputNumber + 'pong';
  } else if ((inputNumber%3) === 0) {
  inputNumber = inputNumber + 'ping';
  } else {
  inputNumber = inputNumber + loopCount;
  }
}
// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#until-number").val();
    $('#pong').show();
    $('#result').text(inputNumber);
  });
});
