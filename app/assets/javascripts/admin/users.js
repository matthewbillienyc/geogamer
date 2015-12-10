// admin chart stuff !!!!

$(function(){

  $.ajax({
    url: '/chart',
    method: 'get',
    success: function(data){
      debugger;
    }
  })

})

function ChartBuilder(labels, datas){
  this.labels = labels
  this.dataSetProperties = [
    {
        label: "user games",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: datas
    }
  ]
}

ChartBuilder.prototype = {
  buildChart: function(){
    var data = {labels: this.labels, datasets: this.dataSetProperties}
    var ctx = $("#user-games-chart").get(0).getContext('2d')
    var userGamesChart = new Chart(ctx).Bar(data)
  }
}
