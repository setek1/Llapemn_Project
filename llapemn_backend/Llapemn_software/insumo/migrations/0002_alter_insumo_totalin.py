# Generated by Django 4.2.3 on 2023-10-28 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insumo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='insumo',
            name='totalIn',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
