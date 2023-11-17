# Generated by Django 4.2.3 on 2023-11-15 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cita2', '0006_remove_cita2_fecha_hora'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cita2',
            name='fecha',
        ),
        migrations.RemoveField(
            model_name='cita2',
            name='hora',
        ),
        migrations.AddField(
            model_name='cita2',
            name='fecha_hora',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]