from django.db import models
from geolocation.google_maps import GoogleMaps
# Create your models here.

class Lot(models.Model):
     lon = models.FloatField()
     lat = models.FloatField()
     rating = models.IntegerField(default=5)

     def __str__(self):
          return 'Longitude: {}\nLattitude: {}\nRating: {}'.format(self.lon, self.lat, self.rating)

class Votes():
     pass
