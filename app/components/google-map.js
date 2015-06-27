import Ember from 'ember';

export default Ember.Component.extend({
    insertMap: function() {
        var options = {
            center: new window.google.maps.LatLng(
                this.get('latitude'),
                this.get('longitude')
            ),
            zoom: 15
        };
        new window.google.maps.Map(this.$('.map-canvas')[0], options);
        $(window).resize(function() {
          google.maps.event.trigger(map, "resize");
        });
    }.on('didInsertElement')
});
