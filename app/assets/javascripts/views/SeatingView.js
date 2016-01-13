var app = app || {};

app.SeatingView = Backbone.View.extend({
tagname: "ul",
render:function(){
  var seating = this.model.get("row", "column")
  this.$el.text("hello");
  this.$el.prependTo('#main')
}
})