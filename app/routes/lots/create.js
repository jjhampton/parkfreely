import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return this.store.createRecord('lot', {
     biking: false,
     walking: false,
     publictransit: false
   });
 },

 actions: {
   sendLotRating: function(lot) {
     console.log(lot.get('latitude'));
     console.log(lot.get('longitude'));
     console.log(lot.get('description'));
     console.log(lot.get('biking'));
     console.log(lot.get('walking'));
     console.log(lot.get('publictransit'));
     console.log(lot.get('safety'));


     lot.save().then(function() {
       console.log('saved');
       this.transitionTo('index');
     }.bind(this));
   }
 }



  // getLocation: function() {
  //   if ('geolocation' in navigator) {
  //     return new Ember.RSVP.Promise(function(resolve) {
  //       var userLocation = {};
  //       navigator.geolocation.getCurrentPosition(function(position) {
  //         userLocation.latitude = position.coords.latitude;
  //         userLocation.longitude = position.coords.longitude;
  //         resolve(userLocation);
  //       });
  //     });
  //   }
  // }
});
