import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['add-form'],
  safetyNumbers: [1,2,3,4,5,6,7,8,9,10],
  currentSafetyNumber: 1,
  actions: {
    submit: function() {
     var latitude = $('.user-latitude').text();
     var longitude = $('.user-longitude').text();
     var description = $('.add-form-description').val();
     var biking;
     var walking;
     var publictransit;
     var safety = $('.safety :selected').text();

      if ($(".add-form-biking").prop('checked')) {
        biking = true;
      }
      else {
        biking = false;
      }
      if ($(".add-form-walking").prop('checked')) {
        walking = true;
      }
      else {
        walking = false;
      }
      if ($(".add-form-publictransit").prop('checked')) {
        publictransit = true;
      }
      else {
        publictransit = false;
      }
      console.log(latitude);
      console.log(longitude);
      console.log(description);
      console.log(biking);
      console.log(walking);
      console.log(publictransit);
      console.log(safety);
      $.ajax({
        method: "POST",
        url: "localhost:8000/lots/post",
        data: {
          "latitude": latitude,
          "location": longitude,
          "description": description,
          "biking": biking,
          "walking": walking,
          "publictransit": publictransit,
          "safety": safety
          }
       });
    }.bind(this)
  }
});
