# Generated by Django 3.2 on 2022-05-02 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0024_alter_tickets_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='phone_number',
            field=models.IntegerField(default=None, null=True),
        ),
    ]
