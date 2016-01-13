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

    // // // Creating a new collection
    // // // Fetching the collection so it has all the flights
    // // // Wait until the fetching has finished

    // Get all of the origins - _.unique( app.flights.pluck( "origin" ) );
    // Get all of the destinations - _.unique( app.flights.pluck( "destination" ) );
    // Put the origins in the first select tag as options - #originSelect
    // Put the destinations in the second select tag as options - #destinationSelect

    $("#originSelect").append("<option>Origin</option>");
  }
});