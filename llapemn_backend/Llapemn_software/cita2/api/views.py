from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from cita2.models import Cita2
from django_filters.rest_framework import DjangoFilterBackend
from cita2.api.serializers import Cita2Serializer

class Cita2ApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=Cita2Serializer
    queryset=Cita2.objects.all()