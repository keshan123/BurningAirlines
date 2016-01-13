var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {
    var somethingViewTemplate = "Hello, This is the AppView rendering";
    this.$el.html(somethingViewTemplate);

  var seatingView = new app.SeatingView();
   this.$el.append(seatingView);
  }
});