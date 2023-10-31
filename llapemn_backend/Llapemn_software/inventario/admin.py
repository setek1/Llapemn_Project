from django.contrib import admin
from inventario.models import Inventario

# Register your models here.
@admin.register(Inventario)
class InventarioAdmin(admin.ModelAdmin):
    pass