from rest_framework.routers import DefaultRouter
from historial.api.views import HistorialApiViewSet

router_historial=DefaultRouter()

router_historial.register(
    prefix='historial', basename='historial', viewset=HistorialApiViewSet
)