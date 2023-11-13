from django.db import models

# Create your models here.
class Paciente(models.Model):
    # Información Personal
    nombre = models.CharField(max_length=120, null=True, blank=True)
    apellido = models.CharField(max_length=120, null=True, blank=True)
    dni = models.CharField(max_length=20, null=True, blank=True)
    fecha_nacimiento = models.DateField(null=True, blank=True)
    genero = models.CharField(max_length=10, choices=[('masculino', 'Masculino'), ('femenino', 'Femenino'), ('otro', 'Otro')], null=True, blank=True)
    direccion = models.TextField(null=True, blank=True)
    telefono = models.CharField(max_length=15, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    altura = models.CharField(max_length=5, null=True, blank=True)
    peso = models.CharField(max_length=5, null=True, blank=True)
    edad = models.CharField(max_length=3, null=True, blank=True)

    # Información Médica
    tipo_sangre = models.CharField(max_length=5, choices=[('A', 'A'), ('B', 'B'), ('AB', 'AB'), ('O', 'O')], null=True, blank=True)
    alergias = models.TextField(null=True, blank=True)
    medicamentos_actuales = models.TextField(null=True, blank=True)
    enfermedades_previas = models.TextField(null=True, blank=True)
    cirugias_previas = models.TextField(null=True,blank=True)
    medico_referente = models.CharField(max_length=120, null=True, blank=True)

    # Información de Contacto de Emergencia
    nombre_contacto_emergencia = models.CharField(max_length=120, null=True,blank=True)
    telefono_contacto_emergencia = models.CharField(max_length=15, null=True, blank=True)
    relacion_contacto_emergencia = models.CharField(max_length=50, null=True, blank=True)

    # Información Adicional
    fecha_ingreso = models.DateField(null=True, blank=True)
    seguro_medico = models.TextField(null=True,blank=True)
    observaciones = models.TextField(null=True,blank=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido} - DNI: {self.dni}"