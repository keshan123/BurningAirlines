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
      var columns = plane.get('columns');

      Array.range= function(a, b, step){
        var A = [];
        if (typeof a == 'number'){
            A[0] = a;
            step = step || 1;
            while(a+step<= b){
                A[A.length]= a+= step;
            }
        }
        else {
            var s = 'abcdefghijklmnopqrstuvwxyz';
            if(a === a.toUpperCase()){
                b = b.toUpperCase();
                s = s.toUpperCase();
            }
            s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
            A = s.split('');        
        }
        return A;
      }

      var rowList = Array.range(1, rows);
      $('#main').append("<h2>Rows:" + rowList + "</h2>");
  
      var columnList = Array.range('A', 'F')
      $('#main').append("<h2>Columns:" + columnList + "</h2>");
    
     // var seats = _.each(rowList, function(row){ _.map(columnList, function(column){column + row})}
      $('#main').append("<h2>Seats:" + seats + "</h2>");
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

