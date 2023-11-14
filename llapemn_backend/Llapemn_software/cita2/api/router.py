from rest_framework.routers import DefaultRouter
from cita2.api.views import Cita2ApiViewSet

router_cita2=DefaultRouter()

router_cita2.register(
    prefix='cita2', basename='cita2', viewset=Cita2ApiViewSet
)