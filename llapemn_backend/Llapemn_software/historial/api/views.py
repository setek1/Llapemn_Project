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
<<<<<<< HEAD
from django.db.models import Sum
from django.db.models.functions import TruncMonth
from django.utils import timezone
from django.db.models import Case, When, Value, IntegerField
from django.db.models import Sum, F, Value as V
from django.db.models.functions import Coalesce
from django.db.models import OuterRef, Subquery
from django.db.models import Q
from django.db.models.functions import Coalesce, ExtractMonth
=======
>>>>>>> 0d1d04e38371f88d8a37df9aa2070297f1e5b088



class HistorialApiViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=HistorialSerializer
    queryset=Historial.objects.all()
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['id_insumo']
    

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
    @action(detail=False, methods=['post'])
    def set_password(self, request, pk=None):
        if request.method == 'POST':
            serializer = HistorialSerializer(data=request.data)
            if serializer.is_valid():
                # Update descripcion based on Operacion
                producto_id = serializer.validated_data['id_insumo']
                insumo = Insumo.objects.get(id=producto_id)
                serializer.validated_data['cantidadU'] = serializer.validated_data['cantidad']
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
                elif serializer.validated_data['operacion'] == 'A':
                    serializer.validated_data['descripcion'] = f'{serializer.validated_data["cantidad"]} - Ingreso realizado'
                
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'detail': 'Método de solicitud no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

<<<<<<< HEAD
    @action(detail=False, methods=['GET'])
    def get_chart(self, request):
        #     year_actual = 2023

        #     all_months = [month for month in range(1, 13)]

        # # Obtener la suma de insumos por mes para todas las operaciones de suma en el año actual
        #     queryset = Historial.objects.filter(
        #         operacion='R',
        #         fecha__year=year_actual
        #     ).annotate(month_number=ExtractMonth('fecha')).values('month_number').annotate(suma_insumos=Sum('cantidad'))

        # # Llenar con ceros aquellos meses que no tienen datos
        #     all_months_query = (
        #         Historial.objects.filter(
        #             operacion='R',
        #             fecha__year=year_actual,
        #             fecha__month__in=all_months
        #         ).annotate(month_number=ExtractMonth('fecha')).values('month_number').annotate(suma_insumos=Sum('cantidad'))
        #     )

        # # Combinar los resultados utilizando Coalesce para llenar con ceros aquellos meses sin datos
        #     all_months_query = all_months_query.annotate(
        #         suma_insumos=Coalesce('suma_insumos', V(0))
        #     ).values('month_number', 'suma_insumos')

        # # Formatear los datos según sea necesario
        #     data = [
        #         {
        #             'month': resultado['month_number'],
        #             'suma_insumos': resultado['suma_insumos']
        #         }
        #         for resultado in all_months_query
        #     ]

        # # Devolver la respuesta JSON
        #     return Response(data, status=status.HTTP_200_OK)

    #     year_actual = 2023

    # # Obtener la suma de insumos por mes para todas las operaciones de suma en el año actual
    #     queryset = Historial.objects.filter(
    #             operacion='R',
    #             fecha__year=year_actual
    #         ).annotate(month=TruncMonth('fecha')).values('month').annotate(suma_insumos=Sum('cantidad'))

    # # Formatear los datos según sea necesario
    #     data = [
    #     {
    #         'month': resultado['month'].month,
    #         'suma_insumos': resultado['suma_insumos'] or 0
    #     }
    #     for resultado in queryset
    # ]

    # # Devolver la respuesta JSON
    #     return Response(data, status=status.HTTP_200_OK)
        year_actual = 2023

        # Obtener la suma de insumos por mes para la operación 'S' en el año actual
        queryset_s = Historial.objects.filter(
            operacion__in=('S','A'),
            fecha__year=year_actual
        ).annotate(month=TruncMonth('fecha')).values('month').annotate(suma_insumos_s=Sum('cantidadU'))

        # Obtener la suma de insumos por mes para la operación 'R' en el año actual
        queryset_r = Historial.objects.filter(
            operacion='R',
            fecha__year=year_actual
        ).annotate(month=TruncMonth('fecha')).values('month').annotate(suma_insumos_r=Sum('cantidadU'))

        # Combinar los resultados
        combined_data = []
        for result_s in queryset_s:
            month_s = result_s['month'].month
            suma_insumos_s = result_s['suma_insumos_s'] or 0

            # Buscar el resultado correspondiente en la consulta para la operación 'R'
            result_r = next((result for result in queryset_r if result['month'].month == month_s), None)
            suma_insumos_r = result_r['suma_insumos_r'] if result_r else 0

            # Calcular la suma total de 'S' y 'R' y agregar al resultado combinado
            total_suma_insumos = suma_insumos_s - suma_insumos_r
            combined_data.append({
                'month': month_s,
                'suma_insumos_s': suma_insumos_s,
                'suma_insumos_r': suma_insumos_r,
                'total_suma_insumos': total_suma_insumos
            })

        # Devolver la respuesta JSON
        return Response(combined_data, status=status.HTTP_200_OK)


=======
>>>>>>> 0d1d04e38371f88d8a37df9aa2070297f1e5b088
        # if request.method == 'POST':
        #     serializer = HistorialSerializer(data=request.data)
        #     if serializer.is_valid():
        #         serializer.save()
        #         return Response(serializer.data, status=status.HTTP_201_CREATED)
        #     else:
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # else:
<<<<<<< HEAD
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
    @action(detail=False, methods=['GET'])
    def get_A(self, request):
        
        queryset = Historial.objects.filter(operacion='A').order_by('-fecha')[:5]
        serializer = HistorialSerializer(queryset, many=True)
        return Response(serializer.data)
=======
        #     return Response({'detail': 'Método de solicitud no permitido'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
>>>>>>> 0d1d04e38371f88d8a37df9aa2070297f1e5b088
