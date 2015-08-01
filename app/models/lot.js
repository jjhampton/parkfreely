import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  description: DS.attr('string'),
  biking: DS.attr('boolean'),
  walking: DS.attr('boolean'),
  publictransit: DS.attr('boolean'),
  safety: DS.attr('number'),
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number'),
  bikingShow: Ember.computed('biking', function() {
    if (this.get('biking')) {
      return "Yes";
    }
    else {
      return "No";
    }
  }),
  walkingShow: Ember.computed('walking', function() {
    if (this.get('walking')) {
      return "Yes";
    }
    else {
      return "No";
    }
  }),
  publicTransitShow: Ember.computed('publictransit', function() {
    if (this.get('publictransit')) {
      return "Yes";
    }
    else {
      return "No";
    }
  })

});
