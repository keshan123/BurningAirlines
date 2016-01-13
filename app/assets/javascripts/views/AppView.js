var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var searchInputView = new app.searchInputView();
    searchInputView.render();

    // var flightView = new app.FlightView();
    // flightView.render();    

    // var seatingView = new app.seatingView();
    // seatingView.render();
  }
});