# Generated by Django 4.2 on 2023-05-10 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_todoitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('name', models.CharField(max_length=255)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.DeleteModel(
            name='TodoItem',
        ),
    ]