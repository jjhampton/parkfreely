from django.db import models
from geolocation.google_maps import GoogleMaps
# Create your models here.

class Lot(models.Model):
     __init__(self):

     lon = models.FloatField()
     lat = models.FloatField()
