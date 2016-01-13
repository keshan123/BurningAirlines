var app = app|| {};

app.Seat = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    row: "NA",
    column: "NA"
  },
  initialize: function(){
  },

});