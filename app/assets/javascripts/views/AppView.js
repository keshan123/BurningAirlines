var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {

    var somethingViewTemplate = "Hello, This is the AppView rendering";
    this.$el.html(somethingViewTemplate);

  // var seatingView = new app.SeatingView();
  //  this.$el.append(seatingView);

    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var searchInputView = new app.searchInputView();
    searchInputView.render();

    var flightView = new app.flightView();
    flightView.render();    

    var seatingView = new app.seatingView();
    seatingView.render();

  }
});