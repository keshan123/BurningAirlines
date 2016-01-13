var app = app|| {};

app.Seat = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    row: "NA"
    column: "NA"
  },
    // Set up any behaivor in here.
  initialize: function(){

  },

});