from django.contrib import admin
from cita2.models import Cita2

# Register your models here.


@admin.register(Cita2)
class Cita2Admin(admin.ModelAdmin):
    pass
