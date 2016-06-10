// front-end logic
$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();

    $("#pong").show();
    $("#result").text("test output");
  });
});

// back-end logic
