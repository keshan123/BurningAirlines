var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function () {
    var appView = new app.AppView({ });
    appView.render();
  },

  viewFlight: function(id){
    var flight = app.flightList.get(id);
    var flightView = new app.FlightView({model: flight});
    flightView.render(); 
  }

  });