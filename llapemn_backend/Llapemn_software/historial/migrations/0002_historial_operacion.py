# Generated by Django 4.2.3 on 2023-11-02 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('historial', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='historial',
            name='operacion',
            field=models.CharField(blank=True, choices=[('DP', 'Disponible'), ('FS', 'Fuera de Servicio'), ('ER', 'En Reparacion')], max_length=20, null=True),
        ),
    ]
