from django.contrib import admin

from salas.models import Salas

@admin.register(Salas)
class CategoryAdmin(admin.ModelAdmin):
    pass