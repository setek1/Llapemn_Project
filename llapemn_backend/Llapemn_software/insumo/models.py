from django.db import models

TIPO_CHOICES=[
        ('C', 'Consuntivo'),
        ('NC', 'No consuntivo'),
        
    ]
class Insumo(models.Model):
    nombreIn=models.CharField(max_length=50)
    stockIn=models.IntegerField()
    tipoIn=models.CharField(max_length=2,choices=TIPO_CHOICES)
    precioUIn=models.IntegerField()
    totalIn=models.IntegerField()

    def __str__(self):
        return self.nombreIn
