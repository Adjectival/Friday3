// back-end logic
function pingPong(length) {
  var ppArray = [];
  for (var i=1; i<=length; i++) {
    ppArray.push(i);
  }
  var output;
  range.forEach(function(i) {
    output = '';
    if (i%15===0){
			ppArray.push('ping-pong');
		} else if(i%5===0){
      ppArray.push('pong');
		} else if(i%3===0) {
      ppArray.push('ping');
		} else {
      output+=i;
    }
		print(output);
	});
}
// front-end logic
$(document).ready(function() {
  $('form').submit(function(event) {
    var playUntil = parseInt($('#until-number').val());
    var result = ppArray;
    $('#ppwords').show();
    $('#result').text(result);
    event.preventDefault();
    pingPong();
  });
});
