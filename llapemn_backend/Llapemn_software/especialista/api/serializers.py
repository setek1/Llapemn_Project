from rest_framework.serializers import ModelSerializer

from especialista.models import Especialista

class EspecialistaSerializer(ModelSerializer):
    class Meta:
        model=Especialista
        fields='__all__'