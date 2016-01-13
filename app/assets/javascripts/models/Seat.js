var app = app || {};

app.Seat = Backbone.Model.extend({
  urlRoot: "/index",

  defaults:{
    row: "NA",
    column: "NA"

  }

})