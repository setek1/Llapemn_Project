from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from paciente.models import Paciente
from django_filters.rest_framework import DjangoFilterBackend
from paciente.api.serializers import PacienteSerializer

class PacienteApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=PacienteSerializer
    queryset=Paciente.objects.all()