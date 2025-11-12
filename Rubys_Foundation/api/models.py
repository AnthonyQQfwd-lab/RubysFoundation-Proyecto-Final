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

"""
Tabla Users, tabla encargada de almacenar a todos los usuarios, moderadores y administradores de la pagina web,
con datos importantes como su ubicacion, parametros para iniciar sesion y a cuantas mascotas han adoptado y han ayudado 
"""
class Users (models.Model):
    name = models.CharField(max_length=50)
    phoneNumber = models.CharField(max_length=20)
    password = models.CharField(max_length=255)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    petsHelped = models.IntegerField(default=0)
    petsAdopted = models.IntegerField(default=0)
    email = models.EmailField(unique=True)
    accountDate = models.DateField(default=timezone.now)
    isBanned = models.BooleanField(default=False)
    isMember = models.BooleanField(default=False)
    userType = models.ForeignKey(UsersType, on_delete=models.CASCADE)


    def __str__(self):
        return f" {self.name} - {self.userType.role}"
    
"""
Clase TicketsStatus es una clase que almacenera los status de los tickets, los cuales son:

1 No  resuelto 
2 Resuelviendo 
3 Resuelto 

"""
class TicketsStatus (models.Model):
    status = models.CharField(max_length=20)


"""
Clase tickets es la tabla en la que se almacenan todos los tickets hechos por usuarios para dudas, sugerencias o quejas 
"""

class Tickets (models.Model):
    description = models.CharField(max_length=300)
    ticketDate = models.DateField(default=timezone.now)
    ticketstatus = models.ForeignKey(TicketsStatus, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)

"""
La tabla AuditTickets sirve para almacenar todos los tickets resueltos hechos por usuarios con la respuesta del moderador 
"""

class AuditTickets (models.Model):
    moderatorAsnwer = models.CharField(max_length=300)
    answerDate = models.DateField(default=timezone.now)
    moderator = models.ForeignKey(Users, on_delete=models.CASCADE)
    ticket = models.ForeignKey(Tickets, on_delete=models.CASCADE)

"""
Tabla Species es la tabla que almacena los tipos de masotas mas comunes, perros, gatos, pajaros, reptiles, ruedores etc...
"""

class Species (models.Model):
    nameSpecie = models.CharField(max_length=50, default="unknown")

"""
la tabla Breeds, almacena las razas de todos los tipos de mascota 
"""

class Breeds (models.Model):
    name = models.CharField(max_length=50, default="unknown")
    specieBreed = models.ForeignKey(Species, on_delete=models.CASCADE)


"""
 La tabla Pets almacena todas las mascotas que han sido publicadas en el aplicativo
"""

class Pets (models.Model):
    name = models.CharField(max_length=50, default="unknown")
    age = models.IntegerField(default=0)
    vaccinated = models.CharField(max_length=50, default="unknown")
    isActive = models.BooleanField(default=True)
    keeper = models.ForeignKey(Users, on_delete=models.CASCADE)
    breed = models.ForeignKey(Breeds, on_delete=models.CASCADE)

"""
Laa tabla Publications almacenara todas las publicaciones de un usuario 
"""

class Publications (models.Model):
    description = models.CharField(max_length=1000,blank=True, null=True)
    reward= models.IntegerField( blank=True, null=True)
    datePublications = models.DateField(default=timezone.now)
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)

""""
La tabla MediaPets almacena todos los archivos que son de una mascota 
"""

class MediaPets (models.Model):
    imagen = models.ImageField(upload_to='imagenes/', null=True, blank=True)
    video = models.FileField(upload_to='videos/', null=True, blank=True)
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)

    
"""
La tabla de ReportGrade almacena los grados de reporte que hay

1 descripcion : reporte hecho por usuario el cual no ha sido procesado por un moderador, esta en espera a ser visto  

2 descripcion : reporte que ha ya visto un moderador y ha dado el visto bueno como reporte valido,

al ser grado 2 se le dejara de mostrar a el y pasara a ser mostrado al administrador
3 descripcion: el reporte ya ha sido visto por un administrador y da dado su visto bueno al reporte, esto significa que al usuario al que se la haya
reportado sera sancionado como lo dicto el administrador.

4 descricion: los reporte grado 4 son los reporte que pasaron por el moderador pero el administrador concidero que el reporte no esta justificado, 
entonces no se tomaran medidas  
"""
class ReportGrade (models.Model):
    description = models.CharField(max_length=100)

"""
La tabla Reports almacenara los reportes hechos por los usuarios hacia publicaciones o usuarios 
"""

class Reports (models.Model):
    problem = models.CharField(max_length=100)
    userDescription = models.CharField(max_length=500)
    moderatorDescription = models.CharField(max_length=500, blank=True, null= True)
    adminDescription = models.CharField(max_length=500, blank=True, null= True)
    dateReport = models.DateField(default=timezone.now)
    reportGrade = models.ForeignKey(ReportGrade, on_delete=models.CASCADE, blank=True, null= True)
    reportedUser = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='reports_as_reported')
    reporterUser = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='reports_as_reporter')
    moderator = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='reports_as_moderator')
    administrator = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='reports_as_admin')


