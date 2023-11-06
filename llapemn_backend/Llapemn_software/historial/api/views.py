from http.client import responses
from rest_framework.viewsets import ModelViewSet
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from historial.models import Historial
from historial.api.serializers import HistorialSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status



class HistorialApiViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=HistorialSerializer
    queryset=Historial.objects.all()
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['id_insumo']
    

    @action(detail=False, methods=['post'])
    def set_password(self, request, pk=None):
        
        if request.method == 'POST':
            serializer = HistorialSerializer(data=request.data)
            if serializer.is_valid():
                # Update descripcion based on Operacion
                if serializer.validated_data['operacion'] == 'S':
                    serializer.validated_data['descripcion'] = ' - Suma realizada'
                elif serializer.validated_data['operacion'] == 'R':
                    serializer.validated_data['descripcion'] = ' - Resta realizada'
                elif serializer.validated_data['operacion'] == 'C':
                    serializer.validated_data['descripcion'] = ' - Cambio realizada'

                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'detail': 'Método de solicitud no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

        # if request.method == 'POST':
        #     serializer = HistorialSerializer(data=request.data)
        #     if serializer.is_valid():
        #         serializer.save()
        #         return Response(serializer.data, status=status.HTTP_201_CREATED)
        #     else:
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # else:
        #     return Response({'detail': 'Método de solicitud no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)