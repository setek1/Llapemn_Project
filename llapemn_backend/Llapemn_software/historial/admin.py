from django.contrib import admin
from historial.models import Historial

# Register your models here.
@admin.register(Historial)
class HistorialAdmin(admin.ModelAdmin):
    pass