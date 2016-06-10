// front-end logic
$(document).ready(function() {
  $('#ping').submit(function(event) {
    event.preventDefault();

    var arrayedInputs = [parseInt($('#input1').val()), parseInt($('#input2').val())];

    var resultText = arrayedInputs;

    // var resultText = function() {
    //   // return
    //   return parseInt($('#input1').val()) + parseInt($('#input2').val());
    // };

    $('#result').text(resultText);
    $('#pong').show();
  });
});

// back-end logic
// var arrayedInputs = [];
// var pingPongedInputs = arrayedInputs.map(function(arrayedInput) {
//   if (arrayedInputs[i] % 15 = 0) {
//     pingPongedInputs.push('ping-pong');
//   } else if ((arrayedInputs[i]) % 5 = 0) {
//     pingPongedInputs.push('pong');
//   } else if ((arrayedInputs[i]) % 3 = 0) {
//     pingPongedInputs.push('ping');
//   } else {
//     pingPongedInputs.push((arrayedInputs[i]));
//   }
// });
