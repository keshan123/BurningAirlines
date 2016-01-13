var app = app || {};

app.Seats = Backbone.Collection.extend({

  model: app.Seat,
  url:"/index"

  
})