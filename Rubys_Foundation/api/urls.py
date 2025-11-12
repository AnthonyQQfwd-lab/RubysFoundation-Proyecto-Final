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

    AuditTicketsListCreateView,
    AuditTicketsRetrieveUpdateDestroyView,

    SpeciesListCreateView,
    SpeciesRetrieveUpdateDestroyView,

    BreedsListCreateView,
    BreedsRetrieveUpdateDestroyView,

    PetsListCreateView,
    PetsRetrieveUpdateDestroyView,
    
    PublicationsListCreateView,
    PublicationsRetrieveUpdateDestroyView,
    
    MediaPetsListCreateView,
    MediaPetsRetrieveUpdateDestroyView,
    
    ReportsGradeListCreateView,
    ReportsGradeRetrieveUpdateDestroyView,
    
    ReportsListCreateView,
    ReportsRetrieveUpdateDestroyView)

urlpatterns = [
    #Users
    path('users/', UsersListCreateView.as_view(), name="Get and Post Users"),
    path('users/<int:pk>/', UsersRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Users"),

    #Userstype
    path('userstype/', UsersTypeListCreateView.as_view(), name="Get and Post UsersType"),
    path('userstype/<int:pk>/', UsersTypeRetrieveUpdateDestroyView.as_view(), name="Put delete byid  UsersType"),

    #ticketsStatus
    path('ticketsstatus/', TicketsStatusListCreateView.as_view(), name="Get and Post TicketsStatus"),
    path('ticketsstatus/<int:pk>/', TicketsStatusRetrieveUpdateDestroyView.as_view(), name="Put delete byid  TicketsStatus"),

    #Tickets
    path('tickets/', TicketsListCreateView.as_view(), name="Get and Post tickets"),
    path('tickets/<int:pk>/', TicketsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  tickets"),

    #AuditTickets
    path('auditTickets/', AuditTicketsListCreateView.as_view(), name="Get and Post tickets"),
    path('auditTickets/<int:pk>/', AuditTicketsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  tickets"),

    #Species
    path('species/', SpeciesListCreateView.as_view(), name="Get and Post species"),
    path('species/<int:pk>/', SpeciesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  species"),

    #Breeds
    path('breeds/', BreedsListCreateView.as_view(), name="Get and Post Breeds"),
    path('breeds/<int:pk>/', BreedsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Breeds"),

    #Pets
    path('Pets/', PetsListCreateView.as_view(), name="Get and Post Pets"),
    path('Pets/<int:pk>/', PetsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Pets"),

    #Publications
    path('publications/', PublicationsListCreateView.as_view(), name="Get and Post publications"),
    path('publications/<int:pk>/', PublicationsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  publications"),

    #MediaPets
    path('mediaPets/', MediaPetsListCreateView.as_view(), name="Get and Post MediaPets"),
    path('mediaPets/<int:pk>/', MediaPetsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  MediaPets"),

    #ReportsGrade
    path('reportsGrade/', ReportsGradeListCreateView.as_view(), name="Get and Post reportsGrade"),
    path('reportsGrade/<int:pk>/', ReportsGradeRetrieveUpdateDestroyView.as_view(), name="Put delete byid  reportsGrade"),

    #Reports
    path('reports/', ReportsListCreateView.as_view(), name="Get and Post reports"),
    path('reports/<int:pk>/', ReportsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  reports"),
]