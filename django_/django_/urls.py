from django.contrib import admin
from django.urls import path,include
from django_app import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Client',views.ClientView, 'client')
router.register(r'Carburant',views.CarburantView, 'carburant')
router.register(r'Marque',views.MarqueView, 'marque')
router.register(r'Reservation',views.ReservationView, 'reservation')
router.register(r'Super_utilisateur',views.SuperUtilisateurView, 'superUser')
router.register(r'Voiture',views.VoitureView, 'voiture')
router.register(r'Utilisateur',views.UtilisateurView, 'utilisateur')
router.register(r'Transmission',views.TransmissionView, 'transmission')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('django_app.urls')),
    path('django_app/', include(router.urls))
]
