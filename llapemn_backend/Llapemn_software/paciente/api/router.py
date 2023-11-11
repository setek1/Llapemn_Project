from rest_framework.routers import DefaultRouter
from paciente.api.views import PacienteApiViewSet

router_paciente=DefaultRouter()

router_paciente.register(
    prefix='paciente', basename='paciente', viewset=PacienteApiViewSet
)