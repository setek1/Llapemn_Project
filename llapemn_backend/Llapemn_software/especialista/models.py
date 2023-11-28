from django.db import models
from django.conf import settings
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
        ('DOC', 'Doctor'),
    ]

    ESPECIALIDADES_MAP = {
        'Psicólogos': 'PSI',
        'Terapia ocupacional': 'TER',
        'Fonoaudiología': 'FON',
        'Psicopedagogía': 'PSIPE',
        'Psiquiatría': 'PSIQ',
        'Masoterapia': 'MAS',
        'Terapias complementarias': 'TC',
        'Nutricionistas': 'NUT',
        'Biodanza': 'BIO',
        'Doctor': 'DOC',  # Suponiendo que quieras agregar 'Doctor' como una especialidad
        # Agrega aquí otras especialidades si es necesario
    }

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
    )
    nombre = models.CharField(max_length=120, null=True, blank=True)
    apellido = models.CharField(max_length=120, null=True, blank=True)
    especialidad = models.CharField(
        max_length=10, choices=ESPECIALIDADES, null=True, blank=True)
    codigo_medico = models.CharField(
        max_length=20, unique=True, null=True, blank=True)
    numero_telefono = models.CharField(max_length=15, null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.user:
            self.nombre = self.user.first_name
            self.apellido = self.user.last_name
            # Asegúrate de que la especialidad del usuario esté mapeada correctamente
            especialidad_codigo = self.ESPECIALIDADES_MAP.get(
                self.user.especialidad, None)
            if especialidad_codigo:
                self.especialidad = especialidad_codigo
            else:
                # Si no encuentra la especialidad, puedes manejar el error o asignar un valor predeterminado
                raise ValueError(
                    f"Especialidad no válida: {self.user.especialidad}")
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.get_especialidad_display()} - {self.codigo_medico}"
