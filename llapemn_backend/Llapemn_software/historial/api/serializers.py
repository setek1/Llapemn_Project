from rest_framework.serializers import ModelSerializer
from insumo.api.serializers import InsumoSerializer
from historial.models import Historial

class HistorialSerializer(ModelSerializer):
    insumo_data=InsumoSerializer(source='id_insumo', read_only=True)
    class Meta:
        model=Historial
        fields=['id','id_user','id_insumo','id_sala','operacion','descripcion','fecha','insumo_data' ]