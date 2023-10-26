from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from insumo.models import Insumo
from insumo.api.serializers import InsumoSerializer


class InsumoApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=InsumoSerializer
    queryset=Insumo.objects.all()