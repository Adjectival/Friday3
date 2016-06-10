// front-end logic
$(document).ready(function() {
  $('#ping').submit(function(event) {
    event.preventDefault();

    $('#result').text("test output");
    $('.pong').show();

  });
});
// back-end logic
