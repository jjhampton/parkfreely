import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUpVote: function(lot) {
      this.sendAction('addUpVote', lot);
    },

    addDownVote: function(lot) {
      this.sendAction('addDownVote', lot);
    }
  }
});
