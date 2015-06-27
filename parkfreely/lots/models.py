from django.db import models
from geolocation.google_maps import GoogleMaps
# Create your models here.

class Lot(models.Model):
     lon = models.FloatField()
     lat = models.FloatField()
