from django.shortcuts import render
from django.http import JsonResponse
from .models import Carburant, Client, Marque, Reservation, SuperUtilisateur, Utilisateur, Voiture,Transmission
from .serializers import CarburantSerializer, ClientSerializer, MarqueSerializer, ReservationSerializer, SuperUtilisateurSerializer, UtilisateurSerializer, VoitureSerializer,TransmissionSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
# Create your views here.


def my_view(request):
     return JsonResponse("dzqzd",safe=False)



class CarburantView(viewsets.ModelViewSet):
    serializer_class = CarburantSerializer
    queryset = Carburant.objects.all()

class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

class MarqueView(viewsets.ModelViewSet):
    serializer_class = MarqueSerializer
    queryset = Marque.objects.all()

class ReservationView(viewsets.ModelViewSet):
    serializer_class = ReservationSerializer
    queryset = Reservation.objects.all()

class SuperUtilisateurView(viewsets.ModelViewSet):
    serializer_class = SuperUtilisateurSerializer
    queryset = SuperUtilisateur.objects.all()

class UtilisateurView(viewsets.ModelViewSet):
    serializer_class = UtilisateurSerializer
    queryset = Utilisateur.objects.all()

class VoitureView(viewsets.ModelViewSet):
    serializer_class = VoitureSerializer
    queryset = Voiture.objects.all()

class TransmissionView(viewsets.ModelViewSet):
    serializer_class = TransmissionSerializer
    queryset = Transmission.objects.all()
