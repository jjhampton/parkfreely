import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('lot');
  },

  actions: {
    addUpVote: function(lot) {
      lot.incrementProperty('crowdscore');
      lot.set('hasVoted', true);
      lot.save();
    },

    addDownVote: function(lot) {
      lot.decrementProperty('crowdscore');
      lot.set('hasVoted', true);
      lot.save();
    }
  }
});
