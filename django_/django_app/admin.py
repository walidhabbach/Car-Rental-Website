from django.contrib import admin
from .models import Carburant, Client, Marque, Reservation, SuperUtilisateur, Utilisateur, Voiture
 
class CarburantAdmin(admin.ModelAdmin):
    list_display = ('idcarburant', 'nom')
 
class ClientAdmin(admin.ModelAdmin):
    list_display = ('iduser', 'adresse', 'cin', 'liste_noire', 'observation')
 
class MarqueAdmin(admin.ModelAdmin):
    list_display = ('idmarque', 'logo', 'nom')
 
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('iduser', 'idcar', 'date_depart', 'date_arr')
 
class SuperUtilisateurAdmin(admin.ModelAdmin):
    list_display = ('iduser', 'admin')
 
class UtilisateurAdmin(admin.ModelAdmin):
    list_display = ('iduser', 'nom', 'prenom', 'login')
 
class VoitureAdmin(admin.ModelAdmin):
    list_display = ('idcar', 'idmarque', 'idcarburant', 'model', 'image')
 
admin.site.register(Carburant, CarburantAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Marque, MarqueAdmin)
admin.site.register(Reservation, ReservationAdmin)
admin.site.register(SuperUtilisateur, SuperUtilisateurAdmin)
admin.site.register(Utilisateur, UtilisateurAdmin)
admin.site.register(Voiture, VoitureAdmin)
