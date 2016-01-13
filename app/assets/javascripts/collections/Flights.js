var app = app ||{};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,
  url: '/flights',

  initialize: function(){
    //This is where my event handler will be added.
    this.on("add", function(flight){
      //create a new SecretView and give it some information to represent.
      var flightView = new app.FlightView({ model: flight });
      // call render on it
      flightView.render();
    });
  }
});