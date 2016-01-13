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

    // Get all of the origins - 
    var originsList = _.unique( app.flights.pluck( "origin" ) );
    console.log( originsList );
    // Get all of the destinations - 
    var destinationsList = _.unique( app.flights.pluck( "destination" ) );
    console.log( destinationsList );

    // Put the origins in the first select tag as options - #originSelect
    $("#originSelect").appendTo("<option>" + originsList + "</option>");
    // Put the destinations in the second select tag as options - #destinationSelect
    $("#destinationSelect").appendTo("<option>" + destinationsList + "</option>");
    
  }
});