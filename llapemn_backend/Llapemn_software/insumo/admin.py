from django.contrib import admin
from insumo.models import Insumo

# Register your models here.
@admin.register(Insumo)
class InsumosAdmin(admin.ModelAdmin):
    pass