from django.db import models
from geolocation.google_maps import GoogleMaps
# Create your models here.

class Lot(models.Model, longit, latit, rating):
     lon = models.FloatField()
     lat = models.FloatField()
     def __init__(self):
          self.lon = longit
          self.lat = latit
          self.rating = rating

     def __str__(self):
          return 'Longitude: {}\nLattitude: {}\nRating: {}'.format(self.lon, self.lat, self.rating)

class Votes():
     pass

