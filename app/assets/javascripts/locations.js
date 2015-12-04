
$(function(){
	$('#make_guess').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var guess = $('input').val();
		var answer = $('.name').attr('id')
		if (guess.toLowerCase() == answer.toLowerCase()) {
			$("input[name='user-guess']").val('')
			$('.name').append("<div class='gradient-box fade-in-item'><p>You got it!</p><h1>"+answer+"</h1></div>")


		} else {
			alert('Nope! Guess again or reveal more clues!')
			$("input[name='user-guess']").val('')
		}
	})
})
