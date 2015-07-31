import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['lots-index-map'],
  didInsertElement: function() {


    console.log('lots-index-' + this.get('lot.id'));
    console.log(this.get('lot.latitude'));

    //map tile
    var mapBoxBackground = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'jjhampton.f68b0cad',
    accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA',
    minZoom: 0,
    maxZoom: 20
    });

    // map object, set to locate geolocation
    var map = L.map('lots-index-' + this.get('lot.id'), {attributionControl: false}).setView([this.get('lot.latitude'), this.get('lot.longitude')]);

    // add tile to map
    mapBoxBackground.addTo(map);

    // Request address from Google Geocoding API
    Ember.$.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + this.get('lot.latitude') + "," + this.get('lot.longitude'),
      type: 'GET',
      dataType: 'json'
    }).then(function(data) {
      var address = data.results[0].address_components[0].short_name + " " + data.results[0].address_components[1].short_name + ", " + data.results[0].address_components[2].short_name + ", " + data.results[0].address_components[4].short_name;
      console.log(address);
      // add marker to map at user's location
      var marker = L.marker([this.get('lot.latitude'), this.get('lot.longitude')]).addTo(map)
        .bindPopup(address).openPopup();
        map.setZoom(16);
        map.panTo([this.get('lot.latitude'), this.get('lot.longitude')]);
        //Sets latitude and longitude on current user model that is being created
      this.get('lot').set('latitude', marker.getLatLng().lat);
      this.get('lot').set('longitude', marker.getLatLng().lng);
    }.bind(this));
  }
});
