import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['add-form'],
  safetyNumbers: [1,2,3,4,5,6,7,8,9,10],
  currentSafetyNumber: 1,
  actions: {
    sendLotRating: function() {
      this.sendAction('action', this.get('lot'));
    }
  }
});
