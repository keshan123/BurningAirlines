var app = app ||{};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,
  url: 'index',

  initialize: function(){
    //This is where my event handler will be added.
    this.on("add", function(flight){
      var flightView = new app.FlightView({ model: flight });
      //create a new SecretView and give it some information to represent.
      flightView.render();
      // call render on it
    });
  }
});