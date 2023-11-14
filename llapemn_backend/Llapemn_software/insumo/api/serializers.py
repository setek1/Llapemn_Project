from rest_framework.serializers import ModelSerializer
from salas.api.serializers import SalasSerializer

from insumo.models import Insumo

class InsumoSerializer(ModelSerializer):
    sala_data=SalasSerializer(source='id_sala', read_only=True)
    class Meta:
        model=Insumo
        fields=['id','nombreIn','id_sala','stockIn','tipoIn','precioUIn','totalIn','sala_data']