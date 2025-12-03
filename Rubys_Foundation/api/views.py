from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User, Group
from .models import (
    Users, 
    TicketsStatus, 
    Tickets, 
    AuditTickets, 
    Species, 
    Breeds,
    Pets,
    Publications,
    MediaPets,
    ReportsGrade,
    Reports,
    Notes,
    Chats,
    Messages,
    MediaMessages,
    ChatsUsersPets,
    ChatsUsersModerators,
    HappyPets,
    UserType,
    Countries,
    States,
    Cities)

from .serializers import (
    UsersSerializers,
    TicketsStatusSerializers, 
    TicketsSerializers, 
    AuditTicketsSerializers, 
    SpeciesSerializers,
    BreedsSerializers,
    PetsSerializers,
    PublicationsSerializers,
    MediaPetsSerializers,
    ReportsGradeSerializers,
    ReportsSerializers,
    NotesSerializers,
    ChatsSerializers,
    MessagesSerializers,
    MediaMessagesSerializers,
    ChatsUsersPetsSerializers,
    ChatsUsersModeratorsSerializers,
    HappyPetsSerializers,
    UserTypeSerializers,
    UsersDjangoSerializer,
    user_groupSerializers,
    CountriesSerializers,
    StatesSerializers,
    CitiesSerializers)
# Create your views here.

user_group = User.groups.through

class user_groupListCreateView(generics.ListCreateAPIView):
    queryset = user_group.objects.all()
    serializer_class = user_groupSerializers

class user_groupRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = user_group.objects.all()
    serializer_class = user_groupSerializers


#UserType 
class UserTypeListCreateView(generics.ListCreateAPIView):
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializers

class UserTypeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializers


# Users
class UsersListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers

class UsersRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers

#UsersDjango UsersDjangoSerializer
class UsersDjangoListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsersDjangoSerializer

class UsersDjangoRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UsersDjangoSerializer


# TicketsStatus
class TicketsStatusListCreateView(generics.ListCreateAPIView):
    queryset = TicketsStatus.objects.all()
    serializer_class = TicketsStatusSerializers

class TicketsStatusRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TicketsStatus.objects.all()
    serializer_class = TicketsStatusSerializers


# Tickets
class TicketsListCreateView(generics.ListCreateAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializers

class TicketsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializers


# AuditTickets
class AuditTicketsListCreateView(generics.ListCreateAPIView):
    queryset = AuditTickets.objects.all()
    serializer_class = AuditTicketsSerializers

class AuditTicketsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AuditTickets.objects.all()
    serializer_class = AuditTicketsSerializers


# Species
class SpeciesListCreateView(generics.ListCreateAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializers

class SpeciesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializers


# Breeds
class BreedsListCreateView(generics.ListCreateAPIView):
    queryset = Breeds.objects.all()
    serializer_class = BreedsSerializers

class BreedsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Breeds.objects.all()
    serializer_class = BreedsSerializers


# Pets
class PetsListCreateView(generics.ListCreateAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetsSerializers

class PetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetsSerializers


#Publications
class PublicationsListCreateView(generics.ListCreateAPIView):
    queryset = Publications.objects.all()
    serializer_class = PublicationsSerializers

class PublicationsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publications.objects.all()
    serializer_class = PublicationsSerializers


#MediaPets
class MediaPetsListCreateView(generics.ListCreateAPIView):
    queryset = MediaPets.objects.all()
    serializer_class = MediaPetsSerializers

class MediaPetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediaPets.objects.all()
    serializer_class = PublicationsSerializers


#ReportsGrade
class ReportsGradeListCreateView(generics.ListCreateAPIView):
    queryset = ReportsGrade.objects.all()
    serializer_class = ReportsGradeSerializers

class ReportsGradeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReportsGrade.objects.all()
    serializer_class = ReportsGradeSerializers


#Reports
class ReportsListCreateView(generics.ListCreateAPIView):
    queryset = Reports.objects.all()
    serializer_class = ReportsSerializers

class ReportsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reports.objects.all()
    serializer_class = ReportsSerializers


#Notes
class NotesListCreateView(generics.ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializers

class NotesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializers


#Chats
class ChatsListCreateView(generics.ListCreateAPIView):
    queryset = Chats.objects.all()
    serializer_class = ChatsSerializers

class ChatsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chats.objects.all()
    serializer_class = ChatsSerializers


#Messages
class MessagesListCreateView(generics.ListCreateAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializers

class MessagesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializers


#MediaMessages
class MediaMessagesListCreateView(generics.ListCreateAPIView):
    queryset = MediaMessages.objects.all()
    serializer_class = MediaMessagesSerializers

class MediaMessagesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediaMessages.objects.all()
    serializer_class = MediaMessagesSerializers


#ChatsUsersPets
class ChatsUsersPetsListCreateView(generics.ListCreateAPIView):
    queryset = ChatsUsersPets.objects.all()
    serializer_class = ChatsUsersPetsSerializers

class ChatsUsersPetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatsUsersPets.objects.all()
    serializer_class = ChatsUsersPetsSerializers


#ChatsUsersModerators
class ChatsUsersModeratorsListCreateView(generics.ListCreateAPIView):
    queryset = ChatsUsersModerators.objects.all()
    serializer_class = ChatsUsersModeratorsSerializers

class ChatsUsersModeratorsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatsUsersModerators.objects.all()
    serializer_class = ChatsUsersModeratorsSerializers


#HappyPets
class HappyPetsListCreateView(generics.ListCreateAPIView):
    queryset = HappyPets.objects.all()
    serializer_class = HappyPetsSerializers

class HappyPetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HappyPets.objects.all()
    serializer_class = HappyPetsSerializers


#Countries
class CountriesListCreateView(generics.ListCreateAPIView):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializers

class CountriesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializers

#States
class StatesListCreateView(generics.ListCreateAPIView):
    queryset = States.objects.all()
    serializer_class = StatesSerializers

class StatesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = States.objects.all()
    serializer_class = StatesSerializers

#Cities
class CitiesListCreateView(generics.ListCreateAPIView):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializers

class CitiesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializers

