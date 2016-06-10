// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var arrayedInputs = [1, $('#input2').val()];
    $('#result').append('<p>' + arrayedInputs + '<p>');
    $('#pong').show();
  });
});

// back-end logic

// var pingPongedInputs = arrayedInputs.map(function(arrayedInput) {
//   if ((arrayedInput % 15) = 0) {
//     pingPongedInputs.push('ping-pong');
//   } else if ((arrayedInput) % 5 = 0) {
//     pingPongedInputs.push('pong');
//   } else if ((arrayedInput) % 3 = 0) {
//     pingPongedInputs.push('ping');
//   } else {
//     pingPongedInputs.push((arrayedInputs[i]));
//   }
// });
