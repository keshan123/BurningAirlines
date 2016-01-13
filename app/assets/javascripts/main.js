_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

app.flightList = new app.Flights();



$(document).ready(function () {

  app.router = new app.AppRouter();
  Backbone.history.start();

})