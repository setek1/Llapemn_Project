from rest_framework.routers import DefaultRouter
from insumo.api.views import InsumoApiViewSet

router_insumo=DefaultRouter()

router_insumo.register(
    prefix='insumos', basename='inmsumos', viewset=InsumoApiViewSet
)