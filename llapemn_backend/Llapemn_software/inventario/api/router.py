from rest_framework.routers import DefaultRouter

from inventario.api.views import InventarioApiViewSet

router_inventario=DefaultRouter()
router_inventario.register(
    prefix='inventario', basename='inventario', viewset=InventarioApiViewSet
)