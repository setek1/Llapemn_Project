# Generated by Django 4.2.3 on 2023-10-29 19:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('insumo', '0002_alter_insumo_totalin'),
        ('salas', '0002_alter_salas_estado'),
    ]

    operations = [
        migrations.CreateModel(
            name='Inventario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock_sala', models.IntegerField()),
                ('id_insumo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='insumo.insumo')),
                ('id_sala', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='salas.salas')),
            ],
        ),
    ]