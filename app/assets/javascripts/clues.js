$(function(){

  $("#reveal-clue").on('submit', function(e){
    e.preventDefault();
    e.stopPropagation();
    var method = this.getAttribute('method');
    var url = this.getAttribute('action');
    var $form = $(this);
    $.ajax({
      url: url,
      method: method,
      data: $form.serialize(),
      success: function(dataBack){
        if ($("#used-up").length == 1) {
          alert("No more clues, dummy!")
        } else {
        $(".clues").append(dataBack)
        }
      }
    })
  })

})
