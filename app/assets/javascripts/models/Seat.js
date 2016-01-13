var app = app|| {};

app.Seat = Backbone.Model.extend({
  urlRoot: '/planes',
  // defaults: {
  //   rows: "NA"
  //   columns: "NA"
  // },
    // Set up any behaivor in here.
  initialize: function(){
    console.log("initialize completed");
  },

}); 