import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUpVote: function(lot) {
      console.log('addUpVote > component');
      this.sendAction('addUpVote', lot);
    },

    addDownVote: function(lot) {
      console.log('addDownVote > component');
      this.sendAction('addDownVote', lot);
    }
  }
});
