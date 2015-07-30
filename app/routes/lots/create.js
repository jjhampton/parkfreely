import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return this.store.createRecord('lot');
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
