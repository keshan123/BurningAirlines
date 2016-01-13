var app = app || {};

app.Seats = Backbone.Collection.extend({

  model: app.Seat,

  initialize: function(){
    console.log("This ran");
    this.on("add", function(seat){
    var seatingView = new app.SeatingView({ model: Seat})
    seatingView.render();
    })
  }
})