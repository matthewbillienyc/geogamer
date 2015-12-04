
$(function(){

	$("#guess-div").hide();
	$(".next-loc-div").hide();

	$('#where-to').on('dblclick',function(e){
		$(this).hide();
		$("#guess-div").show();
	})

	$('#make_guess').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();
		var guess = $("#location_name").val();
		var answer = $('.name').attr('id')
		if (guess.toLowerCase() == answer.toLowerCase()) {
			// ajax request to locations#score that evaluates num
			// of clues on page and applies proper score to current_score
			$('.name').append("<div class='correct-answer-box fade-in-item center-info'><p>Correct!</p><h1>"+answer+"</h1></div>")
			$("#guess-div").hide();
			$('.next-loc-div').fadeIn(3000, 'swing');
			$('.button-div').fadeOut(3000, 'swing');
			$('.clues').fadeOut(3000, 'swing');
			var url = this.getAttribute('action')
			var method = this.getAttribute('method')
			$.ajax({
				url: url,
				method: method,
				success: function(dataBack){
					debugger;
				}
			})

		} else {
			alert('Nope! Guess again or reveal more clues!')
			$("#location_name").val('')
			$("#guess-div").hide();
			$("#where-to").show();
		}
	})
})
