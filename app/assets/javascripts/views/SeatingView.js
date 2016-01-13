var app = app || {};

app.seatingView = Backbone.View.extend({
  el: "#seatingPlan",

  render: function () {
    var seatingViewTemplate = $("#seatingViewTemplate").html();
    this.$el.html(seatingViewTemplate);
  }
});