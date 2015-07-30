import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  description: DS.attr('string'),
  biking: DS.attr('string'),
  walking: DS.attr('string'),
  publictransit: DS.attr('string'),
  safety: DS.attr('number')
});
