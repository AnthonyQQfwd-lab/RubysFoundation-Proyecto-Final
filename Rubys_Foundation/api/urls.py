from django.urls import path 
from .views import (
    UsersListCreateView,
    UsersRetrieveUpdateDestroyView,
    UsersTypeListCreateView,
    UsersTypeRetrieveUpdateDestroyView)

urlpatterns = [
    path('users/', UsersListCreateView.as_view(), name="Get and Post Users"),
    path('users/<int:pk>', UsersRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Users"),

    path('userstype/', UsersTypeListCreateView.as_view(), name="Get and Post UsersType"),
    path('userstype/<int:pk>', UsersTypeRetrieveUpdateDestroyView.as_view(), name="Put delete byid  UsersType")
]