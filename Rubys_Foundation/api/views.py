from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import (
    IsAuthenticated,
    IsAdminUser,
    AllowAny,
    IsAuthenticatedOrReadOnly
)

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
    Cities,
    MediaBreeds
)

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
    CitiesSerializers,
    MediaBreedsSerializers
)

# =========================
# User Django Groups
# =========================

user_group = User.groups.through

class user_groupListCreateView(generics.ListCreateAPIView):
    queryset = user_group.objects.all()
    serializer_class = user_groupSerializers
    permission_classes = [IsAdminUser]


class user_groupRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = user_group.objects.all()
    serializer_class = user_groupSerializers
    permission_classes = [IsAdminUser]


# =========================
# UserType
# =========================

class UserTypeListCreateView(generics.ListCreateAPIView):
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializers
    permission_classes = [IsAdminUser]


class UserTypeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserType.objects.all()
    serializer_class = UserTypeSerializers
    permission_classes = [IsAdminUser]


# =========================
# Users
# =========================

class UsersListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers
    permission_classes = [IsAdminUser]


class UsersRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers
    permission_classes = [IsAdminUser]


# =========================
# Django Users
# =========================

class UsersDjangoListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsersDjangoSerializer
    permission_classes = [IsAdminUser]


class UsersDjangoRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UsersDjangoSerializer
    permission_classes = [IsAdminUser]


# =========================
# TicketsStatus
# =========================

class TicketsStatusListCreateView(generics.ListCreateAPIView):
    queryset = TicketsStatus.objects.all()
    serializer_class = TicketsStatusSerializers
    permission_classes = [IsAdminUser]


class TicketsStatusRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TicketsStatus.objects.all()
    serializer_class = TicketsStatusSerializers
    permission_classes = [IsAdminUser]


# =========================
# Tickets
# =========================

class TicketsListCreateView(generics.ListCreateAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializers
    permission_classes = [IsAuthenticated]


class TicketsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# AuditTickets
# =========================

class AuditTicketsListCreateView(generics.ListCreateAPIView):
    queryset = AuditTickets.objects.all()
    serializer_class = AuditTicketsSerializers
    permission_classes = [IsAdminUser]


class AuditTicketsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = AuditTickets.objects.all()
    serializer_class = AuditTicketsSerializers
    permission_classes = [IsAdminUser]


# =========================
# Species
# =========================

class SpeciesListCreateView(generics.ListCreateAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]


class SpeciesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializers
    permission_classes = [IsAdminUser]


# =========================
# Breeds
# =========================

class BreedsListCreateView(generics.ListCreateAPIView):
    queryset = Breeds.objects.all()
    serializer_class = BreedsSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]


class BreedsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Breeds.objects.all()
    serializer_class = BreedsSerializers
    permission_classes = [IsAdminUser]


# =========================
# Pets
# =========================

class PetsListCreateView(generics.ListCreateAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetsSerializers
    permission_classes = [IsAuthenticated]


class PetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pets.objects.all()
    serializer_class = PetsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# Publications
# =========================

class PublicationsListCreateView(generics.ListCreateAPIView):
    queryset = Publications.objects.all()
    serializer_class = PublicationsSerializers
    permission_classes = [IsAuthenticated]


class PublicationsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Publications.objects.all()
    serializer_class = PublicationsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# MediaPets
# =========================

class MediaPetsListCreateView(generics.ListCreateAPIView):
    queryset = MediaPets.objects.all()
    serializer_class = MediaPetsSerializers
    permission_classes = [IsAuthenticated]


class MediaPetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediaPets.objects.all()
    serializer_class = MediaPetsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# ReportsGrade
# =========================

class ReportsGradeListCreateView(generics.ListCreateAPIView):
    queryset = ReportsGrade.objects.all()
    serializer_class = ReportsGradeSerializers
    permission_classes = [IsAdminUser]


class ReportsGradeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReportsGrade.objects.all()
    serializer_class = ReportsGradeSerializers
    permission_classes = [IsAdminUser]


# =========================
# Reports
# =========================

class ReportsListCreateView(generics.ListCreateAPIView):
    queryset = Reports.objects.all()
    serializer_class = ReportsSerializers
    permission_classes = [IsAuthenticated]


class ReportsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reports.objects.all()
    serializer_class = ReportsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# Notes
# =========================

class NotesListCreateView(generics.ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializers
    permission_classes = [IsAuthenticated]


class NotesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializers
    permission_classes = [IsAuthenticated]


# =========================
# Chats
# =========================

class ChatsListCreateView(generics.ListCreateAPIView):
    queryset = Chats.objects.all()
    serializer_class = ChatsSerializers
    permission_classes = [IsAuthenticated]


class ChatsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chats.objects.all()
    serializer_class = ChatsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# Messages
# =========================

class MessagesListCreateView(generics.ListCreateAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializers
    permission_classes = [IsAuthenticated]


class MessagesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializers
    permission_classes = [IsAuthenticated]


# =========================
# MediaMessages
# =========================

class MediaMessagesListCreateView(generics.ListCreateAPIView):
    queryset = MediaMessages.objects.all()
    serializer_class = MediaMessagesSerializers
    permission_classes = [IsAuthenticated]


class MediaMessagesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediaMessages.objects.all()
    serializer_class = MediaMessagesSerializers
    permission_classes = [IsAuthenticated]


# =========================
# ChatsUsersPets
# =========================

class ChatsUsersPetsListCreateView(generics.ListCreateAPIView):
    queryset = ChatsUsersPets.objects.all()
    serializer_class = ChatsUsersPetsSerializers
    permission_classes = [IsAuthenticated]


class ChatsUsersPetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatsUsersPets.objects.all()
    serializer_class = ChatsUsersPetsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# ChatsUsersModerators
# =========================

class ChatsUsersModeratorsListCreateView(generics.ListCreateAPIView):
    queryset = ChatsUsersModerators.objects.all()
    serializer_class = ChatsUsersModeratorsSerializers
    permission_classes = [IsAuthenticated]


class ChatsUsersModeratorsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatsUsersModerators.objects.all()
    serializer_class = ChatsUsersModeratorsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# HappyPets
# =========================

class HappyPetsListCreateView(generics.ListCreateAPIView):
    queryset = HappyPets.objects.all()
    serializer_class = HappyPetsSerializers
    permission_classes = [IsAuthenticated]


class HappyPetsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HappyPets.objects.all()
    serializer_class = HappyPetsSerializers
    permission_classes = [IsAuthenticated]


# =========================
# Countries / States / Cities
# =========================

class CountriesListCreateView(generics.ListCreateAPIView):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]


class CountriesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Countries.objects.all()
    serializer_class = CountriesSerializers
    permission_classes = [IsAdminUser]


class StatesListCreateView(generics.ListCreateAPIView):
    queryset = States.objects.all()
    serializer_class = StatesSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]


class StatesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = States.objects.all()
    serializer_class = StatesSerializers
    permission_classes = [IsAdminUser]


class CitiesListCreateView(generics.ListCreateAPIView):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializers
    permission_classes = [IsAuthenticatedOrReadOnly]


class CitiesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializers
    permission_classes = [IsAdminUser]


# =========================
# MediaBreeds
# =========================

class MediaBreedsListCreateView(generics.ListCreateAPIView):
    queryset = MediaBreeds.objects.all()
    serializer_class = MediaBreedsSerializers
    permission_classes = [IsAuthenticated]


class MediaBreedsRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediaBreeds.objects.all()
    serializer_class = MediaBreedsSerializers
    permission_classes = [IsAuthenticated]
