from django.db import models

TIPO_CHOICES=[
        ('C', 'Consuntivo'),
        ('NC', 'No consuntivo'),
        
    ]
class Insumo(models.Model):
    nombreIn=models.CharField(max_length=50)
    id_sala=models.ForeignKey('salas.Salas', on_delete=models.SET_NULL, null=True, blank=True)
    stockIn=models.IntegerField()
    tipoIn=models.CharField(max_length=2,choices=TIPO_CHOICES)
    precioUIn=models.IntegerField()
    totalIn=models.IntegerField(null=True, blank=True)
    fechaIn = models.DateField(auto_now_add=True)

    def __int__(self):
        return self.id
    
    def get_total(self):
        return self.stockIn *self.precioUIn
    
    def save(self,*args,**kwargs):
        if not self.totalIn:
            self.totalIn=self.get_total()
        super().save(*args,**kwargs)
