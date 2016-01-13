var app = app|| {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    flightnumber: "10"
  }

});