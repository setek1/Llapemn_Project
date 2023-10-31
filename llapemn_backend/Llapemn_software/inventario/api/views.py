from rest_framework.viewsets import ModelViewSet
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.db.models import Sum
from salas.api.serializers import SalasSerializer

from inventario.models import Inventario
from inventario.api.serializers import InventarioSerializer
from salas.models import Salas

class InventarioApiViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    salas_data=SalasSerializer(source='id_sala', read_only=True)
    serializer_class = InventarioSerializer
    # queryset = Inventario.objects.values('id_sala').annotate(
    # total=Count('id_sala'),
    # nombre_sala=F('id_sala__nombre'),salas_data=F('salas_data') )
      

    queryset = Inventario.objects.all()
    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = queryset.filter(id_sala__isnull=False).values_list(
            'id_sala__nombre',
            'id_insumo',
            'id_sala__id',
        ).annotate(
            total=Count('id_sala__nombre')
        )

        return queryset
    def list(self, request):
        queryset = self.get_queryset()

        # Send the data back to the client.
        response = Response(queryset)

        return response
        
        

    