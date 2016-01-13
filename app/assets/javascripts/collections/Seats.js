
var app = app || {};

app.Seats = Backbone.Collection.extend({
  model: app.Seat,
  url: '/planes',

  initialize: function(){
    //This is where my event handler will be added.
    this.on("add", function(seat){
      var seatView = new app.SeatingView({ model: seat });
      //create a new SecretView and give it some information to represent.
      seatView.render();
      // call render on it
    });
  }
});