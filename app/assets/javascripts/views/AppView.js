var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {

    var somethingViewTemplate = "Hello, This is the AppView rendering";
    this.$el.html(somethingViewTemplate);

  // var seatingView = new app.SeatingView();
  //  this.$el.append(seatingView);

    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.append(appViewTemplate);

    var searchInputView = new app.searchInputView();
    searchInputView.render();

    // var flightView = new app.FlightView();
    // flightView.render();    
<<<<<<< HEAD
    // var seatingView = new app.seatingView();
    // seatingView.render();

=======


    // var seatingView = new app.seatingView();
    // seatingView.render();

    var seatingView = new app.seatingView();
    seatingView.render();


>>>>>>> 820c18af626f5056994bc4b9a925f67051060245
  }
});