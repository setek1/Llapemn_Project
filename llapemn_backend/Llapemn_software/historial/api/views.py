from http.client import responses
from rest_framework.viewsets import ModelViewSet
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from historial.models import Historial
from insumo .models import Insumo
from historial.api.serializers import HistorialSerializer
from insumo.api.serializers import InsumoSerializer
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
                producto_id = serializer.validated_data['id_insumo']
                insumo = Insumo.objects.get(id=producto_id)
                print(insumo.stockIn)
                if serializer.validated_data['operacion'] == 'S':
                    serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Suma realizada'
                    TotalC = insumo.stockIn + serializer.validated_data['cantidad']
                    serializer.validated_data['cantidad'] = TotalC
                    insumo.stockIn = TotalC
                    insumo.save()

                elif serializer.validated_data['operacion'] == 'R':
                    serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Resta realizada'
                    TotalC = insumo.stockIn - serializer.validated_data['cantidad']
                    serializer.validated_data['cantidad'] = TotalC
                    insumo.stockIn = TotalC
                    insumo.save()
                elif serializer.validated_data['operacion'] == 'C':
                    serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Cambio realizada'
                
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

        #/////////////////////////////////
        # @action(detail=False, methods=['post'])
    # def set_password(self, request, pk=None):
        
    #     if request.method == 'POST':
    #         serializer = HistorialSerializer(data=request.data)
    #         if serializer.is_valid():
    #             # Update descripcion based on Operacion
    #             producto_id=serializer.validated_data['id_insumo']
    #             insumo=InsumoSerializer(Insumo.objects.get(id=producto_id)).data
    #             print(insumo['stockIn'])
    #             if serializer.validated_data['operacion'] == 'S':
    #                 serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Suma realizada'
    #                 TotalC= insumo['stockIn']+serializer.validated_data['cantidad']
    #                 serializer.validated_data['cantidad']=TotalC
    #                 insumo.stockIn=TotalC
    #                 insumo.save()
                    

    #             elif serializer.validated_data['operacion'] == 'R':
    #                 serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Resta realizada'
    #             elif serializer.validated_data['operacion'] == 'C':
    #                 serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Cambio realizada'
                
    #             serializer.save()
    #             return Response(serializer.data, status=status.HTTP_201_CREATED)
    #         else:
    #             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #     else:
    #         return Response({'detail': 'Método de solicitud no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)