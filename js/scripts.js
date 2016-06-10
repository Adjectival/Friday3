// front-end logic
$(document).ready(function() {
  $('#ping').submit(function(event) {
    event.preventDefault();

    var resultText = function() {
      return parseInt($('#input1').val()) + parseInt($('#input2').val());
    };

    $('#result').text(resultText);
    $('#pong').show();
  });
});

// back-end logic
