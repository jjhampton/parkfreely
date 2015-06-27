from django.db import models
from geolocation.google_maps import GoogleMaps
# Create your models here.

class Lot(models.Model):
     lon = models.FloatField()
     lat = models.FloatField()
     safety = models.IntegerField(default=5)
     description = models.CharField(maxsize=200)
     biking = models.BooleanField()
     walking = models.BooleanField()
     publictransit = models.BooleanField()

     def __str__(self):
          return 'Longitude: {}\nLattitude: {}\nRating: {}'.format(self.lon, self.lat, self.rating)

class Votes():
     pass
