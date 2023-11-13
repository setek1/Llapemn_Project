from rest_framework.serializers import ModelSerializer
from users.api.serializers import UserSerializer
from paciente.api.serializers import PacienteSerializer
from cita2.models import Cita2

class Cita2Serializer(ModelSerializer):
    ep_data=UserSerializer(source='especialista_primario', read_only=True)
    es_data=UserSerializer(source='especialista_secundario', read_only=True)
    pa_data=PacienteSerializer(source='nombre_paciente', read_only=True)
    class Meta:
        model=Cita2
        fields=['nombre_paciente','especialista_primario','especialista_secundario','descripcion','fecha_hora','estado','ep_data','es_data','pa_data']