from django.shortcuts import render
from rest_framework import generics
from .models import (
    Users, 
    UsersType, 
    TicketsStatus, 
    Tickets, 
    AuditTickets, 
    Species, 
    Breeds,
    Pets,
    Publications,
    MediaPets,
    ReportsGrade,
    Reports)

from .serializers import (
    UsersSerializers,
    UsersTypeSerializers,
    TicketsStatusSerializers, 
    TicketsSerializers, 
    AuditTicketsSerializers, 
    SpeciesSerializers,
    BreedsSerializers,
    PetsSerializers,
    PublicationsSerializers,
    MediaPetsSerializers,
    ReportsGradeSerializers,
    ReportsSerializers)
# Create your views here.

# Users
class UsersListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers

class UsersRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers


# UsersType
class UsersTypeListCreateView(generics.ListCreateAPIView):
    queryset = UsersType.objects.all()
    serializer_class = UsersTypeSerializers

class UsersTypeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UsersType.objects.all()
    serializer_class = UsersTypeSerializers


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