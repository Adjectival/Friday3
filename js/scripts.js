// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    // var arrayNumbers = [1,playUntilNumber];
    // var playUntilNumber = $('#input2').val();
    // $('#result').append('<p>' + pingPongedInputs(20) + '<p>');
    $('#pong').show();
  });
});

// // back-end logic
var playUntil = 12;
var emptyNums = [];

var loopCount = 0;
for (i=1; i<playUntil; i++) {
  var loopCount=i;
  var inputNums = emptyNums.push(loopCount);
}

// var inputNums = [2,3,4,5,6];
// var ppNums = inputNums.map(function(inputNum) {
//   if ((inputNum%15) === 0) {
//     return ('ping-pong');
//   } else if ((inputNum%5) === 0) {
//     return ('pong');
//   } else if ((inputNum%3) === 0) {
//     return ('ping');
//   } else {
//     return (inputNum);
//   }
// });
