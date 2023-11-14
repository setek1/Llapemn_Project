from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from insumo.models import Insumo
from historial.models import Historial
from insumo.api.serializers import InsumoSerializer
from django_filters.rest_framework import DjangoFilterBackend


class InsumoApiViewSet(ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=InsumoSerializer
    queryset=Insumo.objects.all()
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['id_sala','id']

<<<<<<< HEAD
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
    
    @action(detail=False, methods=['post'])
    def post_w_h(self, request):
        usuario=request.user
        print(usuario)
        
        if request.method == 'POST':
            serializer = InsumoSerializer(data=request.data)
            if serializer.is_valid():
                insumo_instance = serializer.save()
                insumo_id = insumo_instance
                print(insumo_id)

                # Guardar el objeto Historial
                Historial.objects.create(
                    id_user=request.user,
                    id_insumo=insumo_id,
                    id_sala=serializer.validated_data.get('id_sala'),
                    cantidadU=serializer.validated_data.get('stockIn'),
                    cantidad=serializer.validated_data.get('stockIn'),
                    operacion='A',
                    descripcion='A Ingresado Este Insumo',
                )

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
         return Response({'detail': 'Método de solicitud no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        
         
=======
    
>>>>>>> 0d1d04e38371f88d8a37df9aa2070297f1e5b088
