from django.db import models
from geolocation.google_maps import GoogleMaps
# Create your models here.

class Lot(models.Model):
     lng = models.FloatField()
     lat = models.FloatField()
<<<<<<< HEAD
     safety = models.IntegerField(default=5)
     description = models.CharField(maxsize=200)
     biking = models.BooleanField()
     walking = models.BooleanField()
     publictransit = models.BooleanField()
=======
     rating = models.IntegerField(default=5)
     description = CharField(max_length=100)
     upvote = IntegerField(default=0)
     downvote = IntegerField(default=0)
     #  the fields below are highly subject to change
     car = BooleanField()
     bike = BooleanField()
     walk = BooleanField()

>>>>>>> 705dd3ade4adb41a1e2c18d59d120ed49ff2d16c

     def __str__(self):
          return 'Longitude: {}\nLattitude: {}\nRating: {}'.format(self.lon, self.lat, self.rating)
