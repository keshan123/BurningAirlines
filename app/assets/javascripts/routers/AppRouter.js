var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'viewFlight'
  },

  index: function () {
    

    app.flights = new app.Flights();
    app.flights.fetch().done(function () {
      var appView = new app.AppView({ });
      appView.render();
    });
  },

  viewFlight: function(id){
    var flight = app.flights.get(id);
    var flightView = new app.FlightView({model: flight});
    flightView.render(); 
  }

  });

