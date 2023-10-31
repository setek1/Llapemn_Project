from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from inventario.models import Inventario
from salas.api.serializers import SalasSerializer
class InventarioSerializer(ModelSerializer):
    salas_data=SalasSerializer(source='id_sala', read_only=True)
    total=serializers.IntegerField()
   
    class Meta:
        model=Inventario
        fields=['id','id_sala','id_insumo', 'salas_data','total']

    