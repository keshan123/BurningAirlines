var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#flightLists',
  render: function(){
    var flightViewTemplater = _.template( $('#flightView').html());
    this.$el.append( flightViewTemplater( this.model.toJSON() ));
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

