// back-end logic
var ppArray = [];
var pingPongIt = function(number) {
  if (number>0) {
    for (i=1; i<=number; i++) {
      if (i%15===0) {
      ppArray[i] = 'PING-PONG';
      }
      else if (i%5===0) {
      ppArray[i] = 'pong';
      }
      else if (i%3===0) {
      ppArray[i] = 'ping';
      }
      else {
      ppArray[i] = i;
      }
    }
    return ppArray;
  }
}
// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var playUntil = $('#until-number').val();
    var result = pingPongIt(playUntil);
    $('#result').text(result);
    $('#ppwords').show();
  });
});
