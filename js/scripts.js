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

var arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var ppNumbers = [];
var pingPongedInputs = (function(arrayNumber) {
  if ((arrayNumber % 15) === 0) {
    ppNumbers.push(15);
  } else {
    ppNumbers.push(0);
  }
});

//   } else if ((arrayedInput % 5) === 0) {
//     pingPongedInputs.push('pong');
//   } else if ((arrayedInput % 3) === 0) {
//     pingPongedInputs.push('ping');
