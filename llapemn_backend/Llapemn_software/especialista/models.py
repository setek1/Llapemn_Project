from django.db import models

# Create your models here.
class Especialista(models.Model):
    ESPECIALIDADES = [
        ('PSI', 'Psicólogos'),
        ('TER', 'Terapia ocupacional'),
        ('FON', 'Fonoaudiología'),
        ('PSIPE', 'Psicopedagogía'),
        ('PSIQ', 'Psiquiatría'),
        ('MAS', 'Masoterapia'),
        ('TC', 'Terapias complementarias'),
        ('NUT', 'Nutricionistas'),
        ('BIO', 'Biodanza'),
    ]
    
    nombre = models.CharField(max_length=120, null=True, blank=True)
    apellido = models.CharField(max_length=120, null=True, blank=True)
    especialidad = models.CharField(max_length=10, choices=ESPECIALIDADES, null=True, blank=True)
    codigo_medico = models.CharField(max_length=20, unique=True, null=True, blank=True)
    numero_telefono = models.CharField(max_length=15, null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.get_especialidad_display()} - {self.codigo_medico}"
