from rest_framework.serializers import ModelSerializer
from salas.models import Salas

class SalasSerializer(ModelSerializer):
    class Meta:
        model = Salas
        fields=['id','nombre', 'descripcion', 'estado']