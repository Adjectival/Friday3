// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    // var arrayNumbers = [1,playUntilNumber];
    // var playUntilNumber = $('#input').val();
    // $('#result').append('<p>' + ppNums() + '<p>');
    $('#pong').show();
  });
});

// // back-end logic
var playUntil = 12;
var inputNums = [1,2,3,4,5,6,7,15];
var dittoNums  = inputNums.slice();

var ppNums = inputNums.map(function(inputNum) {
  var loopCount = 0;
  for (i=1; i<loopCount; i++) {
    var loopCount=i;
    if ((inputNum%15) === 0) {
      console.log ('ping-pong');
    } else if ((inputNum%5) === 0) {
      console.log ('pong');
    } else if ((inputNum%3) === 0) {
      console.log ('ping');
    } else {
      console.log (inputNum);
    }
  }
  // var dittoNum = inputNums.push(loopCount);
});
