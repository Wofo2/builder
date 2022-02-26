# Generated by Django 3.2.2 on 2022-02-20 18:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0002_remove_otps_receiver'),
    ]

    operations = [
        migrations.AddField(
            model_name='otps',
            name='receiver',
            field=models.OneToOneField(db_constraint=False, default=0, on_delete=django.db.models.deletion.CASCADE, to='users.founder'),
            preserve_default=False,
        ),
    ]
