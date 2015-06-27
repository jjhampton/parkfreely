from django.db import models

class Lot(models.Model):
    lon = models.FloatField()
    lat = models.FloatField()
