from django.shortcuts import render
from .models import Users, UsersType
from rest_framework import generics
from .serializers import UsersSerializers, UsersTypeSerializers
# Create your views here.
class UsersListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializers


class UsersRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class =  UsersSerializers
class UsersTypeListCreateView(generics.ListCreateAPIView):
    queryset = UsersType.objects.all()
    serializer_class = UsersTypeSerializers
class UsersTypeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UsersType.objects.all()
    serializer_class =  UsersTypeSerializers