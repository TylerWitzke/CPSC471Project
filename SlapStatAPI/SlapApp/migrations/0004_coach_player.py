# Generated by Django 3.2.12 on 2022-04-03 19:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('SlapApp', '0003_alter_personnal_team_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Height', models.PositiveIntegerField()),
                ('Weight', models.PositiveIntegerField()),
                ('Handedness', models.CharField(max_length=1)),
                ('Number', models.PositiveIntegerField()),
                ('Position', models.CharField(max_length=2)),
                ('Email', models.ForeignKey(db_column='Email', on_delete=django.db.models.deletion.CASCADE, to='SlapApp.personnal')),
                ('Team_ID', models.ForeignKey(db_column='Team_ID', on_delete=django.db.models.deletion.CASCADE, to='SlapApp.team')),
            ],
        ),
        migrations.CreateModel(
            name='Coach',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.ForeignKey(db_column='Email', on_delete=django.db.models.deletion.CASCADE, to='SlapApp.personnal')),
                ('Team_ID', models.ForeignKey(db_column='Team_ID', on_delete=django.db.models.deletion.CASCADE, to='SlapApp.team')),
            ],
        ),
    ]
