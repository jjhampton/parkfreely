import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('lot');
  },

  actions: {
    addUpVote: function(lot) {
      lot.incrementProperty('upvotes');
      lot.save();
    },

    addDownVote: function(lot) {
      lot.incrementProperty('downvotes');
      lot.save();
    }
  }
});
