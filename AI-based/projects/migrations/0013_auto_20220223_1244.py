# Generated by Django 3.2 on 2022-02-23 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0012_auto_20220120_1211'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tickets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('email', models.EmailField(default=None, max_length=30, null=True)),
                ('phone_number', models.CharField(default=None, max_length=13, null=True)),
                ('ticket_priority', models.CharField(blank=True, choices=[('first', 'urgent'), ('second ', 'medium'), ('third ', 'low')], max_length=50, null=True)),
                ('description', models.TextField(default=False)),
                ('supported_image', models.ImageField(default=None, null=True, upload_to='images/')),
                ('ticket_status', models.CharField(blank=True, choices=[('To do', 'To do'), ('Done ', 'Done'), ('Pending ', 'Pending')], max_length=50, null=True)),
                ('updated_as', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Interview',
        ),
    ]
