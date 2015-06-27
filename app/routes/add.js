import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return this.getLocation();
 },

 actions: {
   submit: function() {
    var latitude = $('.user-latitude').text();
    var longitude = $('.user-longitude').text();
    var description = $('.add-form-description').val();
    var biking;
    var walking;
    var publictransit;
    var safety = $('.safety :selected').text();

     if ($(".add-form-biking").prop('checked')) {
       biking = true;
     }
     else {
       biking = false;
     }
     if ($(".add-form-walking").prop('checked')) {
       walking = true;
     }
     else {
       walking = false;
     }
     if ($(".add-form-publictransit").prop('checked')) {
       publictransit = true;
     }
     else {
       publictransit = false;
     }
     console.log(latitude);
     console.log(longitude);
     console.log(description);
     console.log(biking);
     console.log(walking);
     console.log(publictransit);
     console.log(safety);
     $.ajax({
       method: "POST",
       url: "localhost:8000/lots/post",
       data: {
         "latitude": latitude,
         "location": longitude,
         "description": description,
         "biking": biking,
         "walking": walking,
         "publictransit": publictransit,
         "safety": safety
         }
      });
   }.bind(this)
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
