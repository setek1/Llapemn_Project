"""
URL configuration for Llapemn_software project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from users.api.router import router_user
from salas.api.router import router_salas
from insumo.api.router import router_insumo
from inventario.api.router import router_inventario
from historial.api.router import router_historial
from paciente.api.router import router_paciente
from cita2.api.router import router_cita2

schema_view = get_schema_view(
   openapi.Info(
      title="Llapëmn - ApiDoc",
      default_version='v1',
      description="Documentación API",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include('users.api.router')),
    path('api/', include(router_user.urls)),
    path('api/', include(router_salas.urls)),
    path('api/', include(router_insumo.urls)),
    path('api/', include(router_inventario.urls)),
    path('api/', include(router_historial.urls)),
    path('api/', include(router_paciente.urls)),
    path('api/', include(router_cita2.urls)),
   
]
