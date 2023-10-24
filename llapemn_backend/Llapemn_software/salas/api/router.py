from rest_framework.routers import DefaultRouter
from salas.api.views import SalasApiViewSet

router_salas= DefaultRouter()
router_salas.register(
    prefix='salas', basename='salas', viewset=SalasApiViewSet
)