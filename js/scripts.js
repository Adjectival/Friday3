// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    // var arrayNumbers = [1,playUntilNumber];
    var playUntilNumber = $('#input2').val();
    $('#result').append('<p>' + pingPongedInputs() + '<p>');
    $('#pong').show();
  });
});

// back-end logic

var arrayNumbers = [1,3,5,15,1,1,1,1,5,3,15];
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
