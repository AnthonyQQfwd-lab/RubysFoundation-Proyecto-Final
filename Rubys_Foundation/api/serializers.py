from rest_framework import serializers
from django.contrib.auth.hashers import make_password
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

#Users
class UsersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"
        extra_kwargs = {
            'password': {'write_only': True}  
        }

    def create(self, validated_data):
        
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

#UsersType
class UsersTypeSerializers(serializers.ModelSerializer):
    class Meta:
        model = UsersType
        fields = "__all__"

#TicketsStatus
class TicketsStatusSerializers(serializers.ModelSerializer):
    class Meta:
        model = TicketsStatus
        fields = "__all__"

#Tickets
class TicketsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = "__all__"

#AuditTickets
class AuditTicketsSerializers(serializers.ModelSerializer):
    class Meta:
        model = AuditTickets
        fields = "__all__"

#Species
class SpeciesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = "__all__"

#Breeds
class BreedsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Breeds
        fields = "__all__"

#Pets
class PetsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Pets
        fields = "__all__"

#Publications
class PublicationsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = "__all__"

#MediaPets
class MediaPetsSerializers(serializers.ModelSerializer):
    class Meta:
        model = MediaPets
        fields = "__all__"

#ReportsGrade
class ReportsGradeSerializers(serializers.ModelSerializer):
    class Meta:
        model = ReportsGrade
        fields = "__all__"
        
#Reports
class ReportsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reports
        fields = "__all__"
