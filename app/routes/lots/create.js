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
     lot.set('upvotes', 0);
     lot.set('downvotes', 0);
     lot.save().then(function() {
       this.transitionTo('index');
     }.bind(this));
   }
 }
});
