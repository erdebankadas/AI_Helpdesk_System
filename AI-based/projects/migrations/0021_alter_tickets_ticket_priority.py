# Generated by Django 3.2 on 2022-03-08 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0020_alter_tickets_ticket_priority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='ticket_priority',
            field=models.CharField(blank=True, choices=[('Fast', 'High'), ('On Hold ', 'Medium'), ('Delay ', 'Low')], max_length=50, null=True),
        ),
    ]
