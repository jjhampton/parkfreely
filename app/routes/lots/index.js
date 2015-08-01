import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('lot');
  },

  actions: {
    addUpVote: function(lot) {
      console.log('addUpVote > route');
      this.sendAction('addUpVote', lot);
    },

    addDownVote: function(lot) {
      console.log('addDownVote > route');
      this.sendAction('addDownVote', lot);
    }
  }
});
