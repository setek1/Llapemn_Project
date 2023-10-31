from django.db import models

# Create your models here.

class Inventario(models.Model):
    id_sala=models.ForeignKey('salas.Salas', on_delete=models.SET_NULL, null=True, blank=True)
    id_insumo=models.ForeignKey('insumo.Insumo', on_delete=models.SET_NULL, null=True, blank=True)
    
    def __str__(self):
        return self.id_sala.nombre

    