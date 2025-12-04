from django.urls import path 
from .views import (
    UsersListCreateView,
    UsersRetrieveUpdateDestroyView,

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
    ReportsRetrieveUpdateDestroyView,
    
    NotesListCreateView,
    NotesRetrieveUpdateDestroyView,
    
    ChatsListCreateView,
    ChatsRetrieveUpdateDestroyView,
    
    MessagesListCreateView,
    MessagesRetrieveUpdateDestroyView,
    
    MediaMessagesListCreateView,
    MediaMessagesRetrieveUpdateDestroyView,
    
    ChatsUsersPetsListCreateView,
    ChatsUsersPetsRetrieveUpdateDestroyView,
    
    ChatsUsersModeratorsListCreateView,
    ChatsUsersModeratorsRetrieveUpdateDestroyView,
    
    HappyPetsListCreateView,
    HappyPetsRetrieveUpdateDestroyView,
    
    UserTypeListCreateView,
    UserTypeRetrieveUpdateDestroyView,
    
    UsersDjangoListCreateView,
    UsersDjangoRetrieveUpdateDestroyView,
    
    user_groupListCreateView,
    user_groupRetrieveUpdateDestroyView,
    
    CountriesListCreateView,
    CountriesRetrieveUpdateDestroyView,
    
    StatesListCreateView,
    StatesRetrieveUpdateDestroyView,
    
    CitiesListCreateView,
    CitiesRetrieveUpdateDestroyView,
    
    MediaBreedsListCreateView,
    MediaBreedsRetrieveUpdateDestroyView)

from rest_framework_simplejwt.views import(TokenObtainPairView,TokenRefreshView)

urlpatterns = [
    #Users
    path('users/', UsersListCreateView.as_view(), name="Get and Post Users"),
    path('users/<int:pk>/', UsersRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Users"),

    #UsersDjango
    path('usersdjango/', UsersDjangoListCreateView.as_view(), name="Get and Post usersdjango"),
    path('usersdjango/<int:pk>/', UsersDjangoRetrieveUpdateDestroyView.as_view(), name="Put delete byid  usersdjango"),

    #UserType
    path('usertype/', UserTypeListCreateView.as_view(), name="Get and Post usertype"),
    path('usertype/<int:pk>/', UserTypeRetrieveUpdateDestroyView.as_view(), name="Put delete byid  usertype"),

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
    path('pets/', PetsListCreateView.as_view(), name="Get and Post Pets"),
    path('pets/<int:pk>/', PetsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  Pets"),

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

    #Notes
    path('notes/', NotesListCreateView.as_view(), name="Get and Post notes"),
    path('notes/<int:pk>/', NotesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  notes"),

    #Chats
    path('chats/', ChatsListCreateView.as_view(), name="Get and Post chats"),
    path('chats/<int:pk>/', ChatsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  chats"),

    #Messages
    path('messages/', MessagesListCreateView.as_view(), name="Get and Post messages"),
    path('messages/<int:pk>/', MessagesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  messages"),

    #MediaMessages
    path('mediamessages/', MediaMessagesListCreateView.as_view(), name="Get and Post mediamessages"),
    path('mediamessages/<int:pk>/', MediaMessagesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  mediamessages"),

    #ChatsUsersPets
    path('chatsuserspets/', ChatsUsersPetsListCreateView.as_view(), name="Get and Post chatsuserspets"),
    path('chatsuserspets/<int:pk>/', ChatsUsersPetsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  chatsuserspets"),

    #ChatsUsersModerators
    path('chatsusersmoderators/', ChatsUsersModeratorsListCreateView.as_view(), name="Get and Post chatsusersmoderators"),
    path('chatsusersmoderators/<int:pk>/', ChatsUsersModeratorsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  chatsusersmoderators"),

    #HappyPets
    path('happypets/', HappyPetsListCreateView.as_view(), name="Get and Post happypets"),
    path('happypets/<int:pk>/', HappyPetsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  happypets"),

    path('login/', TokenObtainPairView.as_view(),name='view-get-token'),
    path('refresh/', TokenRefreshView.as_view(),name='view-refresh-token'),

    #user_group
    path('usergroup/', user_groupListCreateView.as_view(), name="Get and Post user_group"),
    path('usergroup/<int:pk>/', user_groupRetrieveUpdateDestroyView.as_view(), name="Put delete byid  user_group"),

    #Countries
    path('countries/', CountriesListCreateView.as_view(), name="Get and Post countries"),
    path('countries/<int:pk>/', CountriesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  countries"),

    #States
    path('states/', StatesListCreateView.as_view(), name="Get and Post states"),
    path('states/<int:pk>/', StatesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  states"),

    #Cities
    path('cities/', CitiesListCreateView.as_view(), name="Get and Post cities"),
    path('cities/<int:pk>/', CitiesRetrieveUpdateDestroyView.as_view(), name="Put delete byid  cities"),

    #MediaBreeds
    path('mediaBreeds/', MediaBreedsListCreateView.as_view(), name="Get and Post mediaBreeds"),
    path('mediaBreeds/<int:pk>/', MediaBreedsRetrieveUpdateDestroyView.as_view(), name="Put delete byid  mediaBreeds"),
]