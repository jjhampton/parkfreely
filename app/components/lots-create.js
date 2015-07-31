import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['add-form'],
  safetyNumbers: [1,2,3,4,5,6,7,8,9,10],
  currentSafetyNumber: 1,
  actions: {
    sendLotRating: function() {

      console.log(this.get('lot.description'));
      console.log(this.get('lot.biking'));
      console.log(this.get('lot.walking'));
      console.log(this.get('lot.publictransit'));
      console.log(this.get('lot.safety'));

      this.sendAction('action', this.get('lot'));
    }
  }
});
