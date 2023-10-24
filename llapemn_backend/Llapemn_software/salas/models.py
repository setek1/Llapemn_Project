from django.db import models


ESTADO_CHOICES=[
        ('DP', 'Disponible'),
        ('FS', 'Fuera de Servicio'),
        ('ER', 'En Reparacion'),
    ]

class Salas(models.Model):
    nombre=models.CharField(max_length=50)
    descripcion=models.TextField(null=True, blank=True)
    estado=models.CharField(max_length=20, choices=ESTADO_CHOICES, default='DP')
    def __str__(self):
        return self.nombre
