var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  render: function(){
    var flightViewTemplater = _.template( $('#flightView').html());
    this.$el.html( flightViewTemplater( this.model.toJSON() ));

    var planeId = this.model.get('plane_id');
    //$('#main').append("<h3>Plane ID: " + planeId + "</h3>");

    if (app.seats){
      var plane = app.seats.get( planeId );
      var planeName = plane.get('name');
      $('#main').append("<h3>Plane Name: " + planeName + "</h3>");

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
      //$('#ContentContainer').append("<h3>Rows:" + rowList + "</h3>");
  
      var columnList = Array.range('A', columns)
      //$('#ContentContainer').append("<h3>Columns:" + columnList + "</h3>");

      // Create a div with the id of planeLayout and put it at the end of the body
      // This is where all of the seats will go
      $("#ContentContainer").append( "<div id='planeLayout'></div>" )

      var generateColumn = function (rowNumber) { // Receive a row number
        console.log( "\tCreating seats. Row to be put in: Number " + rowNumber + ". You can select this with $('.row" + rowNumber + "');");
        for ( var i = 0; i < columnList.length; i++ ) {
          // Go through the list of characters ("A", "B") and store the current letter as letter
          var letter = columnList[i];
          console.log( "\tCreate a new seat in row number " + rowNumber + ". It's column name is " + letter + "." );
          console.log( "\t" + rowNumber + letter )
          // Create a new div with the class of column and column plus the letter (i.e. columnA, columnB)
          var $el = $("<div>").addClass("seat column column" + letter).text( rowNumber + letter );
          // Select the right row (the one that was just created), and put this div at the end of it
          $(".row" + rowNumber).append( $el );
        }
      }

      var generateRow = function (num) {
        console.log( "Generating Row " + num );

        // Create a div with the class or row and the class of row and the row number (i.e. row1, row2)
        var $el = $( "<div>" ).addClass("row row" + num);
        // Put that at the end of the planeLayout
        $("#planeLayout").append($el);

        generateColumn( num ); // Create the actual seats here and make sure they know which row was created
        $("#planeLayout").append("<br />"); // To make sure that the rows aren't next to each other

        console.log( "\n\n" );
      }

      // We know how many rows there are, so let's create a row for each one of them passing in the row number
      for (var i = 1; i <= rows; i++ ) { 
        generateRow( i )
      }

    }
  }

});

app.SeatView = Backbone.View.extend({
  el: '#main',
  render: function(){

  }

});



