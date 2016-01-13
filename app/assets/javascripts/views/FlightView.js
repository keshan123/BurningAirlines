var app = app || {};


app.FlightView = Backbone.View.extend({
  
tagName: "li", // this creates a new element.
render: function(){
  var flightnumber = this.model.get( "flightnumber" ); // Get the content of the model that was passed in.
  this.$el.text( flightnumber ); // set the li's content to be wahtever was passed in
  this.$el.prependTo( "#main" ); //Puts in on the HTML page at the start of #secrets.
}

});

  // create_table "flights", force: :cascade do |t|
  //   t.string   "flightnumber"
  //   t.string   "origin"
  //   t.string   "destination"
  //   t.date     "date"
  //   t.datetime "created_at",   null: false
  //   t.datetime "updated_at",   null: false
  //   t.integer  "plane_id"
  // end

