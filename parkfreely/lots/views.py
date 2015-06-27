from django.shortcuts import render

from django.http import HttpResponse

from .serializers import LotSerializer

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from .models import Lot

# Create your views here.

def index(request):
    return HttpResponse("We made it to the lots index!")

@api_view(['GET'])
# @renderer_classes((JSONRenderer,))
def lot_all_view(request, format=None):
    lots = Lot.objects.all()
    serial_lots = [LotSerializer(lot).data for lot in lots]
    content = {"all_lots": serial_lots}
    return Response(content)

@api_view(['POST'])
# @renderer_classes((JSONRenderer,))
def lot_post(request, format=None):
    data = JSONParser().parse(request)
    print(data)
    serializer = LotSerializer(data=data)
    if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    content = {'status': 'error'}
    return Response(content)
