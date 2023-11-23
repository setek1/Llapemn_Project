from django.contrib import admin
from especialista.models import Especialista
# Register your models here.


@admin.register(Especialista)
class EspecialistaAdmin(admin.ModelAdmin):
    pass
