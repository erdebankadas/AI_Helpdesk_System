# Generated by Django 3.2 on 2022-05-02 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0023_alter_tickets_ticket_priority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='phone_number',
            field=models.IntegerField(default=None, max_length=13, null=True),
        ),
    ]