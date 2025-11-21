from django.db import models
from django.utils import timezone
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User
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




class UserType (models.Model):
    role = models.CharField(max_length=50)
    description = models.CharField(max_length=300)

class UsersDjango (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    petsHelped = models.IntegerField(default=0)
    petsAdopted = models.IntegerField(default=0)
    isMember = models.BooleanField(default=False)
    usertype = models.ForeignKey(UserType, on_delete=models.CASCADE)


"""
Tabla Users, tabla encargada de almacenar a todos los usuarios, moderadores y administradores de la pagina web,
con datos importantes como su ubicacion, parametros para iniciar sesion y a cuantas mascotas han adoptado y han ayudado 
"""
class Users (models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    username = models.CharField(max_length=20, unique=True)
    phoneNumber = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=256)



    petsHelped = models.IntegerField(default=0)
    petsAdopted = models.IntegerField(default=0)
    isMember = models.BooleanField(default=False)
    dateJoined = models.DateField(default=timezone.now)
    usertype = models.ForeignKey(UserType, on_delete=models.CASCADE)
    
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
La clase HappyPets es la tabla que almacena a todas las mascotas que han sido adoptadas o restacada 
"""

class HappyPets (models.Model):
    date = models.DateField(default=timezone.now)
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)
    owner = models.ForeignKey(Users, on_delete=models.CASCADE)


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

class MediaPets(models.Model):
    imagen = CloudinaryField('image', folder='mediapets/images/', null=True, blank=True)
    video = CloudinaryField('video', folder='mediapets/videos/', null=True, blank=True)
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
class ReportsGrade (models.Model):
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
    reportGrade = models.ForeignKey(ReportsGrade, on_delete=models.CASCADE, blank=True, null= True)
    reportedUser = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='reports_as_reported')
    reporterUser = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='reports_as_reporter')
    moderator = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='reports_as_moderator')
    administrator = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='reports_as_admin')


"""
La tabla Notes se guardaran las notas y reviews que se le ha dado a un usuario 
"""
class Notes (models.Model):
    review = models.CharField(max_length=250)
    reviewer = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='reviewer')
    reviewee = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='reviewee')

"""
La tabla chats almacenara los chats que se tengan entre usuarios 
"""
class Chats (models.Model):
    about = models.CharField(max_length=250)

"""
La tabla mensaje almacenara todos los mensajes que van a un chat 
"""

class Messages (models.Model):
    message = models.CharField(max_length=1000)
    date = models.DateTimeField(default=timezone.now)
    answerTo = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='replies')
    user = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True)
    chat = models.ForeignKey(Chats, on_delete=models.CASCADE, blank=True, null=True)

"""
La tabla MediaMessage almacenara todos los archivos de un mensaje 
"""

class MediaMessages(models.Model):
    imagen = CloudinaryField('image', folder='messagemedia/imagenes/', null=True, blank=True)
    video = CloudinaryField('video', folder='messagemedia/videos/', null=True, blank=True, resource_type='video')
    message = models.ForeignKey(Messages, on_delete=models.CASCADE)

"""
tabla entermedia para comunicar los usuarios en los chats 
"""

class ChatsUsersPets (models.Model):
    member1 = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='member1')
    member2 = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='member2')
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chats, on_delete=models.CASCADE)

#tabla entermedia para comunicar los usuarios en el chat con moderadores

class ChatsUsersModerators (models.Model):
    member1 = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='User')
    member2 = models.ForeignKey(Users, on_delete=models.CASCADE, blank=True, null=True, related_name='Moderator')
    chat = models.ForeignKey(Chats, on_delete=models.CASCADE)



