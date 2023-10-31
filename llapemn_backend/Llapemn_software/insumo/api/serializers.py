from rest_framework.serializers import ModelSerializer

from insumo.models import Insumo

class InsumoSerializer(ModelSerializer):
    class Meta:
        model=Insumo
        fields=['id','nombreIn','id_sala','stockIn','tipoIn','precioUIn','totalIn']