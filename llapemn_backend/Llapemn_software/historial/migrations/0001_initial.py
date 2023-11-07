# Generated by Django 4.2.3 on 2023-11-02 19:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('salas', '0002_alter_salas_estado'),
        ('insumo', '0003_insumo_id_sala'),
    ]

    operations = [
        migrations.CreateModel(
            name='Historial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descripcion', models.TextField(blank=True, null=True)),
                ('fecha', models.DateField(auto_now_add=True)),
                ('id_insumo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='insumo.insumo')),
                ('id_sala', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='salas.salas')),
                ('id_user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]