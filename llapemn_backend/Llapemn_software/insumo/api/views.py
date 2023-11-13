from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from insumo.models import Insumo
from insumo.api.serializers import InsumoSerializer
from django_filters.rest_framework import DjangoFilterBackend


class InsumoApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=InsumoSerializer
    queryset=Insumo.objects.all()
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['id_sala','id']

    