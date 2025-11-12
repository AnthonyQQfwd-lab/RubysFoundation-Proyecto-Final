from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Users, UsersType, TicketsStatus, Tickets, AuditTickets, Species

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

class UsersTypeSerializers(serializers.ModelSerializer):
    class Meta:
        model = UsersType
        fields = "__all__"

class TicketsStatusSerializers(serializers.ModelSerializer):
    class Meta:
        model = TicketsStatus
        fields = "__all__"

class TicketsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = "__all__"

class AuditTicketsSerializers(serializers.ModelSerializer):
    class Meta:
        model = AuditTickets
        fields = "__all__"

class SpeciesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = "__all__"

