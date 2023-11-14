from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from historial.models import Historial

from salas.models import Salas
from salas.api.serializers import SalasSerializer

class SalasApiViewSet(ModelViewSet):
    permissim_classes=[IsAuthenticatedOrReadOnly]
    serializer_class=SalasSerializer
    queryset=Salas.objects.all()

    # @action(detail=False, methods=['patch'])
    # def PatchSala(self, request, pk):
    #     try:
    #         objeto = Salas.objects.get(pk=pk)
    #     except Salas.DoesNotExist:
    #         return Response({"error": "El objeto no existe"}, status=status.HTTP_404_NOT_FOUND)

    #     if request.method == 'PATCH':
    #         serializer = SalasSerializer(objeto, data=request.data, partial=True)
    #         if serializer.is_valid():
    #             serializer.save()
    #             Historial.objects.create(
    #                 id_user=request.user,
    #                 id_insumo=serializer.validated_data.get('id'),
    #                 id_sala=serializer.validated_data.get('id_sala'),
    #                 operacion='C',
    #                 descripcion='Se cambio de sala',
    #             )
    #             return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)