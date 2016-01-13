var app = app || {};

app.searchInputView = Backbone.View.extend({
  el: "#searchForm",

  events: { 
    'click button': 'searchFlights'
  },

  searchFlights: function () { // need to pass destination and origin here

  },

  render: function () {
    var searchInputViewTemplate = $("#searchInputViewTemplate").html();
    this.$el.html(searchInputViewTemplate);
  }
});