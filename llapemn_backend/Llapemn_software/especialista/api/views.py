from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from especialista.models import Especialista
from django_filters.rest_framework import DjangoFilterBackend
from especialista.api.serializers import EspecialistaSerializer

class EspecialistaApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=EspecialistaSerializer
    queryset=Especialista.objects.all()