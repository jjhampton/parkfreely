import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var myLatlng = new google.maps.LatLng(this.get('latitude'),
    this.get('longitude'));
    var options = {
        center: new window.google.maps.LatLng(this.get('latitude'),
        this.get('longitude')),
        zoom: 15
    };

    var map = new window.google.maps.Map(this.$('.map-canvas')[0], options);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
    });
  }.on('didInsertElement')
});
