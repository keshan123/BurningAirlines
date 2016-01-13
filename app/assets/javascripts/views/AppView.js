var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {

    var somethingViewTemplate = "Hello, This is the AppView rendering";
    this.$el.html(somethingViewTemplate);

    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.append(appViewTemplate);

    var searchInputView = new app.searchInputView();
    searchInputView.render(); 

  }
});