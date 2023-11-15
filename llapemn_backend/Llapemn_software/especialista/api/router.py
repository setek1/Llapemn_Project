from rest_framework.routers import DefaultRouter
from especialista.api.views import EspecialistaApiViewSet

router_especialista=DefaultRouter()

router_especialista.register(
    prefix='especialista', basename='especialista', viewset=EspecialistaApiViewSet
)