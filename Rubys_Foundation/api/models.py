from django.db import models
from django.utils import timezone

# Create your models here.

"""
clase UserType, tabla de tipos de roles para determinar el rol de un usuario 

1 User : 
El usuario es capaz de publicar, editar y eliminar sus propios post,
puede abrir un ticket para comunicarse con un moderador o reportar una publicacion.

2 Moderator:
Los moderadores administran los reports hechos por los usuarios y pueden aceptarlos 
subiendolos de grado y mandandolos con el administrador a la vez que se oculta la publicacion  

3 Admin: 
Los administradores toman la decision final sobre un reprot, si concuerda que el report esta justificado
el usuario reportado sera baneado, si no, simplemente la publicacion se volvera visible
"""
class UsersType (models.Model):
    role = models.CharField(max_length=20)
    description = models.CharField(max_length=300)

class Users (models.Model):
    name = models.CharField(max_length=50)
    phoneNumber = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    petsHelped = models.IntegerField(default=0)
    petsAdopted = models.IntegerField(default=0)
    accountDate = models.DateField(default=timezone.now)
    userType = models.ForeignKey(UsersType, on_delete=models.CASCADE)


    def __str__(self):
        return f" {self.name} - {self.userType.role}"



