var app = app || {};

app.searchInputView = Backbone.View.extend({
  el: "#searchForm",

  events: { 
    'click button': 'searchFlights'
  },

  searchFlights: function () { 
    // Get the origin out of the select tag
    var desiredOrigin = this.$el.find("#originSelect").val();
    // Get the destination out of the select tag
    var desiredDestination = this.$el.find("#destinationSelect").val();

    // Store the flights with the selected origin and the selected destination as appropriateFlights
    var appropriateFlights = app.flights.where({ origin: desiredOrigin, destination: desiredDestination });

    $("#flightLists").html(""); // Empty out the flightLists div so it is only the current search results

    if ( appropriateFlights.length === 0 ) {
      $("#flightLists").html("No Flights found!");
      return;
    }

    _.each( appropriateFlights, function (flight) { // Go through each appropriate flight and store the current one as flight
      // Create a new flightListView passing in the current flight (so it has some data to show)
      var flightListView = new app.FlightListView({ model: flight });
      // Call render on that
      flightListView.render();
    });
  },

  render: function () {
    var searchInputViewTemplate = $("#searchInputViewTemplate").html();
    this.$el.html(searchInputViewTemplate);

    // // // Creating a new collection
    // // // Fetching the collection so it has all the flights
    // // // Wait until the fetching has finished

    // Get all of the origins - 
    var originsList = _.unique( app.flights.pluck( "origin" ) );
    // Get all of the destinations - 
    var destinationsList = _.unique( app.flights.pluck( "destination" ) );

    // Put the origins in the first select tag as options - #originSelect
    _.each( originsList, function( origin )
    {    $("#originSelect").append("<option>" + origin + "</option>");
    });

    // Put the destinations in the second select tag as options - #destinationSelect    
    _.each( destinationsList, function( destination )
    {    $("#destinationSelect").append("<option>" + destination + "</option>");
    });
    
  }
});