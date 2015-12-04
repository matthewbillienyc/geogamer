
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
		var guess = $("#name").val();
		var answer = $('.name').attr('id')
		if (guess.toLowerCase() == answer.toLowerCase()) {
			$('.name').append("<div class='correct-answer-box fade-in-item center-info'><p>Correct!</p><h1>"+answer+"</h1></div>")
			$("#guess-div").hide();
			$('.next-loc-div').fadeIn(3000, 'swing');
			$('.button-div').fadeOut(3000, 'swing');
			$('.clues').fadeOut(3000, 'swing');
			var url = this.getAttribute('action')
			var method = this.getAttribute('method')
			var listLength = $('li').length
			var score = eval($("#score").attr("value"))
			score = (score - listLength*10)
			$("#score").attr("value", score)
			$.ajax({
				url: url,
				method: method,
				data: $(this).serialize(),
				success: function(){
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
