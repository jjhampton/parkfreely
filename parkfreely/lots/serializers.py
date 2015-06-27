from django.forms import widgets
from rest_framework import serializers
from .models import Lot

class LotSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    lon = serializers.FloatField()
    lat = serializers.FloatField()
    rating = serializers.IntegerField()

    def create(self, validated_data):
        return Lot.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.lat = validated_data.get('lat', instance.lat)
        instance.lon = validated_data.get('lon', instance.lon)
        instance.rating = validated_data.get('rating', instance.rating)
