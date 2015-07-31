import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  description: DS.attr('string'),
  biking: DS.attr('boolean'),
  walking: DS.attr('boolean'),
  publictransit: DS.attr('boolean'),
  safety: DS.attr('number')
});
