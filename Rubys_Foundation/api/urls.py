from django.urls import path 
from .views import (
    UsersListCreateView,
    UsersRetrieveUpdateDestroyView,
    UsersTypeListCreateView,
    UsersTypeRetrieveUpdateDestroyView)

urlpatterns = [
    path('Users/', UsersListCreateView.as_view(), name="Get and Post Users"),
    path('Users/<int:pk>', UsersRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Users"),

    path('UsersType/', UsersTypeListCreateView.as_view(), name="Get and Post UsersType"),
    path('UsersType/<int:pk>', UsersTypeRetrieveUpdateDestroyView.as_view(), name="Put delete byid  UsersType")
]