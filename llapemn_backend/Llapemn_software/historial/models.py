from django.db import models
from django.db.models.signals import post_save
# Create your models here.
OPER_CHOICES=[
        ('S', 'Suma'),
        ('R', 'Resta'),
        ('C', 'Cambio'),
        ('A', 'Agrego'),
    ]
class Historial(models.Model):
    id_user=models.ForeignKey('users.User', on_delete=models.CASCADE, null=True, blank=True)
    id_insumo=models.ForeignKey('insumo.Insumo', on_delete=models.CASCADE, null=True, blank=True)
    id_sala=models.ForeignKey('salas.Salas', on_delete=models.CASCADE, null=True, blank=True)
    cantidad=models.IntegerField(null=True, blank=True)
    cantidadU=models.IntegerField(null=True, blank=True)
    operacion=models.CharField(max_length=20, choices=OPER_CHOICES,null=True, blank=True)
    descripcion=models.TextField(null=True, blank=True)
<<<<<<< HEAD
    fecha = models.DateField(auto_now_add=True,null=True, blank=True)
=======
    fecha = models.DateField(auto_now_add=True)
>>>>>>> 0d1d04e38371f88d8a37df9aa2070297f1e5b088

    def __str__(self):
        return self.operacion

# def historial_post_save_receiver(sender, instance, created, **kwargs):
#     if created:
#         if instance.operacion == 'S':
#             instance.descripcion = 'Se han sumado '
#         elif instance.operacion == 'R':
#             instance.descripcion = 'Se han restado '
#         elif instance.operacion == 'C':
#             instance.descripcion = 'Se ha cambiado '
#         instance.save()

# post_save.connect(historial_post_save_receiver, sender=Historial)