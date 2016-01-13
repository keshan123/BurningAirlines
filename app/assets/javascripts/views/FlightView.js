var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  render: function(){
    var flightViewTemplater = _.template( $('#flightView').html());
    this.$el.html( flightViewTemplater( this.model.toJSON() ));

    var planeId = this.model.get('plane_id');
    $('#main').append("<h2>" + planeId + "</h2>");

    if (app.seats){
      var plane = app.seats.get( planeId );
      console.log(plane)
      var planeName = plane.get('name');
      $('#main').append("<h2>" + planeName + "</h2>");

      var rows = plane.get('rows');
      var rowList = _.range(1, (rows+1))
      $('#main').append("<h2>Rows:" + rowList + "</h2>");

      var columns = plane.get('columns');
      $('#main').append("<h2>Columns:" + columns + "</h2>");
    }
  }

});

app.SeatView = Backbone.View.extend({
  el: '#main',
  render: function(){
    // var seatViewTemplater = _.template( $('#seatView').html());
    // this.$el.html( seatViewTemplater( this.model.toJSON() ));

    // var planeName = this.model.get('name');

    // $('#main').append("<h2>" + planeName + "</h2>");


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

