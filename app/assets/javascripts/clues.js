$(function(){

  $("#reveal-clue").on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    if ($("li").length < 6) {
      var method = this.getAttribute('method');
      var url = this.getAttribute('action');
      var $form = $(this);
      $.ajax({
        url: url,
        method: method,
        data: $form.serialize(),
        success: function(dataBack){

          // $(".clues").append(dataBack)
          $(".cstmCluesDiv").text(dataBack) 
           
        }
      })
    } else {
      alert("No clue for you!!")
    }

  })

})
