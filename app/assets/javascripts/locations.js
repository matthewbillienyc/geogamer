
$(function(){
	$('#make_guess').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var guess = $('input').val();
		var answer = $('.name').attr('id')
		if (guess.toLowerCase() == answer.toLowerCase()) {
			$('.name').append("<h1> Yes, the answer is "+answer+"</h1>")
		}

		debugger;
	})
})