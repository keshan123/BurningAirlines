var app = app|| {};

app.Flight = Backbone.Model.extend({
  urlRoot: 'index',
  defaults: {
    flightnumber: "10"
  }

});