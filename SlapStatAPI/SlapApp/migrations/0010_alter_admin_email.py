# Generated by Django 3.2.12 on 2022-04-04 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SlapApp', '0009_admin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admin',
            name='Email',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]