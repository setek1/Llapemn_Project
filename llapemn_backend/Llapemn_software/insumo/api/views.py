from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from insumo.models import Insumo
from insumo.api.serializers import InsumoSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


class InsumoApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=InsumoSerializer
    queryset=Insumo.objects.all()
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['id_sala','id']

    @action(detail=False, methods=['GET'])
    def get_recent(self, request):
        recent_insumos=Insumo.objects.all().order_by('fechaIn')[:5]
        serializer=InsumoSerializer(recent_insumos, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    
    @action(detail=False, methods=['GET'])
    def get_low(self, request):
        low_insumos=Insumo.objects.filter(stockIn__lt=5)
        serializer=InsumoSerializer(low_insumos, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
    
    @action(detail=False, methods=['GET'])
    def get_pie_chart(self, request):
         queryset = Insumo.objects.values('nombreIn', 'stockIn')
         resultados = list(queryset)
         return Response(resultados)