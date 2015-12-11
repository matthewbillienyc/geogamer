
$(function(){

	$("#guess-div").hide();
	$(".next-loc-div").hide();

	$('#where-to').on('dblclick',function(e){
		$(this).hide();
		$("#guess-div").show();
	})

	$('#make_guess').on('submit', function(e){

		// e.stopPropagation();
		var guess = $("#name").val();
		var answer = $('.name').attr('id')
		var listLength = $('li').length
		if (guess.toLowerCase() == answer.toLowerCase()) {
			var score = eval($("#score").attr("value"))
			score = (score - listLength*10)
			$("#score").attr("value", score)
			// $('.name').append("<div class='correct-answer-box fade-in-item center-info'><p>Correct!</p><h3>"+answer+"</h3><p class='tiny-text'>You scored "+score+" points this round!</p></div>")
			// $("#guess-div").hide();
			// $('.next-loc-div').fadeIn(3000, 'swing');
			// $('.button-div').fadeOut(3000, 'swing');
			// $('.clues').fadeOut(3000, 'swing');
			alert("Correct! You scored "+score+" points!")
			var url = this.getAttribute('action')
			var method = this.getAttribute('method')
			$.ajax({
				url: url,
				method: method,
				data: $(this).serialize(),
				success: function(databack){
				}
			})
		} else {
			e.preventDefault();
			alert('Nope! Guess again or reveal more clues!')
			$("#location_name").val('')
			$("#guess-div").hide();
			$("#where-to").show();
			debugger;
		}
	})
})
