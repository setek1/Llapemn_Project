from django.db import models
# Asegúrate de importar correctamente el modelo Paciente
from paciente.models import Paciente
# Asegúrate de importar correctamente el modelo Especialista
from users.models import User
from salas.models import Salas


class Cita2(models.Model):
    ESTADOS_CITA = [
        ('programada', 'Programada'),
        ('completada', 'Completada'),
        ('cancelada', 'Cancelada'),
        ('cambiada', 'Cambiada'),
    ]
    nombre_paciente = models.ForeignKey(
        Paciente, null=True, blank=True, on_delete=models.CASCADE)
    especialista_primario = models.ForeignKey(
        User, related_name='citas2_primarias', null=True, blank=True, on_delete=models.CASCADE)
    especialista_secundario = models.ForeignKey(
        User, related_name='citas2_secundarias', null=True, blank=True, on_delete=models.SET_NULL)
    sala_cita = models.ForeignKey(
        Salas, related_name="sala", null=True, blank=True, on_delete=models.SET_NULL)
    descripcion = models.CharField(
        blank=True, null=True)  # Campo de descripción
    diagnostico = models.TextField(
        blank=True, null=True)  # Campo de descripción

    # Campo de fecha y hora de la cita
    fecha = models.DateField(blank=True, null=True)
    hora = models.TimeField(blank=True, null=True)
    hora_fin = models.TimeField(blank=True, null=True)
    # Campo para el estado de la cita
    estado = models.CharField(
        max_length=10, choices=ESTADOS_CITA, default='programada')

    def __str__(self):
        return f"Cita: {self.nombre_paciente} - Fecha : {self.fecha} - De {self.hora} a {self.hora_fin} - Primario: {self.especialista_primario} - Secundario: {self.especialista_secundario or 'Ninguno'} - Sala_cita : {self.sala_cita} - Estado: {self.estado or 'Pendiente'}"
