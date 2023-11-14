# Generated by Django 4.2.3 on 2023-11-14 03:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('salas', '0002_alter_salas_estado'),
        ('cita2', '0002_alter_cita2_fecha_hora'),
    ]

    operations = [
        migrations.AddField(
            model_name='cita2',
            name='sala_cita',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='sala', to='salas.salas'),
        ),
    ]
