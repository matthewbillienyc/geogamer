$(function(){

  $(".games-list").hide();
  $(".game-show").hide()

  $(".past-games").on('click', function(){
    $(".games-list").toggle()
  })

  $(".game-form").on('submit', function(e){
    e.preventDefault()
    e.stopPropagation()
    var method = this.getAttribute('method')
    var url = this.getAttribute('action');
    var $form = $(this);
    $.ajax({
      url: url,
      method: method,
      data: $form.serialize(),
      success: function(dataBack){
        $(".game-show").append(dataBack)
        $(".game-show").fadeIn(500, 'swing')
      }
    })
  })


})
