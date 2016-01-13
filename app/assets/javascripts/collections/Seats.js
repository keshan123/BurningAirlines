var app = app || {};

app.Seats = Backbone.Collection.extend({
  model: app.Seat,
  url: '/planes',

  initialize: function(){
    //This is where my event handler will be added.
    this.on("add", function(seat){
      //create a new PlaneView and give it some information to represent.
      var seatView = new app.SeatView({ model: seat });
      // call render on it
      seatView.render();
    });
  }
});