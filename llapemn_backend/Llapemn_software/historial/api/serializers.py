from rest_framework.serializers import ModelSerializer
from insumo.api.serializers import InsumoSerializer
from users.api.serializers import UserSerializer
from salas.api.serializers import SalasSerializer
from historial.models import Historial

class HistorialSerializer(ModelSerializer):
    insumo_data=InsumoSerializer(source='id_insumo', read_only=True)
    user_data=UserSerializer(source='id_user', read_only=True)
    sala_data=SalasSerializer(source='id_sala', read_only=True)
    class Meta:
        model=Historial
        fields=['id','id_user','id_insumo','id_sala','cantidad','operacion','descripcion','fecha','insumo_data','user_data','sala_data' ]