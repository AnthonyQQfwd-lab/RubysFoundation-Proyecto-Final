from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User, Group
from .models import (
    Users, 
    TicketsStatus, 
    Tickets, 
    AuditTickets, 
    Species, 
    Breeds, 
    Pets,
    HappyPets,
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
    UserType)

#UserType
class UserTypeSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = "__all__"

#UsersDjango
class UsersDjangoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        
        extra_kwargs = {
            'password': {'write_only': True}  
        }

    def create(self, validated_data):
        
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)


        


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

#HappyPets
class HappyPetsSerializers(serializers.ModelSerializer):
    class Meta:
        model = HappyPets
        fields = "__all__"

#Publications
class PublicationsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = "__all__"

#MediaPets
class MediaPetsSerializers(serializers.ModelSerializer):
    imagen = serializers.ImageField(required=False, allow_null=True)
    video = serializers.FileField(required=False, allow_null=True)
    
    class Meta:
        model = MediaPets
        fields = ['id', 'imagen', 'video', 'pet']
    
    def validate(self, data):
        if not data.get('imagen') and not data.get('video'):
            raise serializers.ValidationError("Debe proporcionar al menos una imagen o un video")
        return data

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

#Notes
class NotesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = "__all__"

#Chats
class ChatsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Chats
        fields = "__all__"

#Messages
class MessagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = "__all__"

#MediaMessages
class MediaMessagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = MediaMessages
        fields = "__all__"

#ChatsUsersPets
class ChatsUsersPetsSerializers(serializers.ModelSerializer):
    class Meta:
        model = ChatsUsersPets
        fields = "__all__"

#ChatsUsersModerators
class ChatsUsersModeratorsSerializers(serializers.ModelSerializer):
    class Meta:
        model = ChatsUsersModerators
        fields = "__all__"