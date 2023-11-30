from rest_framework.serializers import ModelSerializer
from users.api.serializers import UserSerializer
from paciente.api.serializers import PacienteSerializer
from cita2.models import Cita2
from salas.api.serializers import SalasSerializer


class Cita2Serializer(ModelSerializer):
    ep_data = UserSerializer(source='especialista_primario', read_only=True)
    es_data = UserSerializer(source='especialista_secundario', read_only=True)
    pa_data = PacienteSerializer(source='nombre_paciente', read_only=True)
    sa_data = SalasSerializer(source='sala_cita', read_only=True)

    class Meta:
        model = Cita2
        fields = ['id', 'nombre_paciente', 'especialista_primario', 'especialista_secundario', 'descripcion', 'diagnostico',
                  'fecha', 'hora', 'hora_fin', 'estado', 'sala_cita', 'ep_data', 'es_data', 'pa_data', 'sa_data']
