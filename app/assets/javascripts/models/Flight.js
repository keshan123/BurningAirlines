var app = app|| {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    flightnumber: "10"
  },
    // Set up any behaivor in here.
  initialize: function(){
    console.log("New post created.");

    // this.on("change:author", function(){
    //   console.log( "A posts author was changed." );
    // });
  }

});