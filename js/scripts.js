// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    // var arrayNumbers = [1,playUntilNumber];
    var playUntilNumber = $('#input2').val();
    $('#result').append('<p>' + pingPongedInputs(playUntilNumber) + '<p>');
    $('#pong').show();
  });
});

// back-end logic
var upperBound = $('#input2').val();
var arrayNumbers = [];
for (i = 0; i < upperBound; i++){
  arrayNumbers.push(1);
}
var ppNumbers = [];
var pingPongedInputs = (function(arrayNumber) {
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
});
