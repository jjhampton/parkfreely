from django.db import models

# Create your models here.
	
class Lot(models.Model):
     lon = models.FloatField()
     lat = models.FloatField()
