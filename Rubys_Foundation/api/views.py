from django.shortcuts import render
from .models import Users, UsersType, TicketsStatus, Tickets, AuditTickets, Species
from rest_framework import generics
from .serializers import UsersSerializers, UsersTypeSerializers, TicketsStatusSerializers, TicketsSerializers, AuditTicketsSerializers, SpeciesSerializers
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