from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='app_users',  # Nome diferente do padrão para evitar conflitos
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='app_users_permissions',  # Nome diferente do padrão para evitar conflitos
        blank=True
    )

class Task(models.Model):
    nome = models.CharField(max_length=100)
    feito = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
