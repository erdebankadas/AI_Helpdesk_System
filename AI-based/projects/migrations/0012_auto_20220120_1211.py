# Generated by Django 3.2 on 2022-01-20 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0011_alter_contact_another_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Interview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(default=None, max_length=30, null=True)),
                ('interview_link', models.URLField(verbose_name='https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODg2ODM5MTAtZjVjMS00NTc2LTlhODUtYjYzMzVlZjM1ZDU4%40thread.v2/0?context=%7b%22Tid%22%3a%226a1bb59e-82af-4f15-bf20-28a18841d5a2%22%2c%22Oid%22%3a%22d9d316b0-0ffa-40d3-8ed1-7a776dcef649%22%7d')),
                ('image', models.ImageField(default=None, null=True, upload_to='images/')),
                ('login_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Contact',
        ),
    ]
