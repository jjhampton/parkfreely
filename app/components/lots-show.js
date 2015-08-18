import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUpVote: function(lot) {
      this.set('hasVoted', true);
      this.sendAction('addUpVote', lot);
    },

    addDownVote: function(lot) {
      this.set('hasVoted', true);
      this.sendAction('addDownVote', lot);
    }
  }
});
