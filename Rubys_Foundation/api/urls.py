from django.urls import path 
from .views import (
    UsersListCreateView,
    UsersRetrieveUpdateDestroyView,
    UsersTypeListCreateView,
    UsersTypeRetrieveUpdateDestroyView,
    TicketsStatusListCreateView,
    TicketsStatusRetrieveUpdateDestroyView,
    TicketsListCreateView,
    TicketsRetrieveUpdateDestroyView,
    SpeciesListCreateView,
    SpeciesRetrieveUpdateDestroyView)

urlpatterns = [
    path('users/', UsersListCreateView.as_view(), name="Get and Post Users"),
    path('users/<int:pk>/', UsersRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Users"),

    path('userstype/', UsersTypeListCreateView.as_view(), name="Get and Post UsersType"),
    path('userstype/<int:pk>/', UsersTypeRetrieveUpdateDestroyView.as_view(), name="Put delete byid  UsersType"),

    path('ticketsstatus/', TicketsStatusListCreateView.as_view(), name="Get and Post TicketsStatus"),
    path('ticketsstatus/<int:pk>/', TicketsStatusRetrieveUpdateDestroyView.as_view(), name="Put delete byid  TicketsStatus"),

    path('tickets/', TicketsListCreateView.as_view(), name="Get and Post tickets"),
    path('tickets/<int:pk>/', TicketsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  tickets"),

    path('species/', SpeciesListCreateView.as_view(), name="Get and Post species"),
    path('species/<int:pk>/', SpeciesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  species"),
]