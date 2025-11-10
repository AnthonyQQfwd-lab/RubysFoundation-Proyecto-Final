from .models import Users, UsersType
from rest_framework import serializers

class UsersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"

class UsersTypeSerializers(serializers.ModelSerializer):
    class Meta:
        model = UsersType
        fields = "__all__"