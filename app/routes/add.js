import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return this.getLocation();
 },

 actions: {
   request: function() {
     console.log('hello');
   }
 },

  getLocation: function() {
    if ('geolocation' in navigator) {
      return new Ember.RSVP.Promise(function(resolve) {
        var userLocation = {};
        navigator.geolocation.getCurrentPosition(function(position) {
          userLocation.latitude = position.coords.latitude;
          userLocation.longitude = position.coords.longitude;
          resolve(userLocation);
        });
      });
    }
  }
});
