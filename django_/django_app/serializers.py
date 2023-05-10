
from rest_framework import serializers
from .models import Carburant, Client, Marque, Reservation, SuperUtilisateur, Utilisateur, Voiture,Transmission


class CarburantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carburant
        fields = '__all__'


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class MarqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marque
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'


class SuperUtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = SuperUtilisateur
        fields = '__all__'


class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = '__all__'


class VoitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voiture
        fields = '__all__'

        
class TransmissionSerializer(serializers.ModelSerializer):
     class Meta:
        model = Transmission
        fields = '__all__'