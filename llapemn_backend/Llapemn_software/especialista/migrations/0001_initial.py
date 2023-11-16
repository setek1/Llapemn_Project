# Generated by Django 4.2.3 on 2023-11-15 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Especialista',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=120, null=True)),
                ('apellido', models.CharField(blank=True, max_length=120, null=True)),
                ('especialidad', models.CharField(blank=True, choices=[('PSI', 'Psicólogos'), ('TER', 'Terapia ocupacional'), ('FON', 'Fonoaudiología'), ('PSIPE', 'Psicopedagogía'), ('PSIQ', 'Psiquiatría'), ('MAS', 'Masoterapia'), ('TC', 'Terapias complementarias'), ('NUT', 'Nutricionistas'), ('BIO', 'Biodanza')], max_length=10, null=True)),
                ('codigo_medico', models.CharField(blank=True, max_length=20, null=True, unique=True)),
                ('numero_telefono', models.CharField(blank=True, max_length=15, null=True)),
                ('direccion', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
