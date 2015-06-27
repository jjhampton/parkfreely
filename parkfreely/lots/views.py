from django.shortcuts import render

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Lot

# Create your views here.

@api_view(['GET'])
@renderer_classes((JSONRenderer,))
def lot_all_view(request, format=None):
    lots = Lot.objects.all()
    content = {"all_lots": lots}
    return Response(content)
