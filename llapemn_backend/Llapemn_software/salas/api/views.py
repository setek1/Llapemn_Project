from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from salas.models import Salas
from salas.api.serializers import SalasSerializer

class SalasApiViewSet(ModelViewSet):
    permissim_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=SalasSerializer
    queryset=Salas.objects.all()
