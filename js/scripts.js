// back-end logic
var arrayNumbers = [];
var ppNumbers = [];
var playUntil = parseInt($("#until-number").val());
var pingPongedInputs = function(arrayNumber) {
  var i = 0;
  while (i<playUntil) {
    arrayNumbers.forEach(function(arrayNumber) {
      if ((arrayNumber % 15) === 0) {
        ppNumbers.push('ping-pong');
      } else if ((arrayNumber % 5) === 0) {
        ppNumbers.push('pong');
      } else if ((arrayNumber % 3) === 0) {
        ppNumbers.push('ping');
      } else {
        ppNumbers.push(arrayNumber);
      }
    });
    i++;
  }
};
// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    pingPongedInputs();
    var result = ppNumbers;
    $('#ppwords').show();
    $('#result').text(result);
  });
});
