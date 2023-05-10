# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Carburant(models.Model):
    idcarburant = models.AutoField(db_column='idCarburant', primary_key=True)  # Field name made lowercase.
    nom = models.CharField(max_length=254, null=True)

    class Meta:
        managed = True
        db_table = 'carburant'


class Client(models.Model):
    iduser = models.OneToOneField('Utilisateur', models.DO_NOTHING, db_column='idUser', primary_key=True)
    adresse = models.CharField(max_length=254)
    cin = models.CharField(max_length=50)
    photo = models.TextField(blank=True, null=True)
    liste_noire = models.IntegerField(blank=True, null=True)
    permis = models.CharField(max_length=20, blank=True, null=True)
    passport = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=60, blank=True, null=True)
    observation = models.CharField(max_length=254, blank=True, null=True)
    societe = models.CharField(max_length=50, blank=True, null=True)
    ville = models.CharField(max_length=50, blank=True, null=True)
    tel = models.CharField(max_length=30, blank=True, null=True)
    date_permis = models.DateField(blank=True, null=True)
    voitures = models.ManyToManyField('Voiture', through='Reservation')

    class Meta:
        managed = True
        db_table = 'client'

class Marque(models.Model):
    idmarque = models.AutoField(db_column='idMarque', primary_key=True)  # Field name made lowercase.
    nom = models.CharField(db_column='nom',max_length=254, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'marque'



class SuperUtilisateur(models.Model):
    iduser = models.OneToOneField('Utilisateur', models.DO_NOTHING, db_column='idUser', primary_key=True)  # Field name made lowercase.
    admin = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'super_utilisateur'


class Utilisateur(models.Model):
    iduser = models.AutoField(db_column='idUser', primary_key=True)  # Field name made lowercase.
    nom = models.CharField(max_length=32)
    prenom = models.CharField(max_length=32)
    login = models.CharField(max_length=50, blank=True, null=True)
    mdp = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'utilisateur'


class Transmission(models.Model):
        id = models.AutoField(db_column='id', primary_key=True)
        type = models.CharField(max_length=50,null=True)
        class Meta:
            managed = True
            db_table = 'transmission'

class Voiture(models.Model):
    idcar = models.AutoField(db_column='idCar', primary_key=True)
    idmarque = models.ForeignKey(Marque, models.DO_NOTHING, db_column='idMarque', blank=True, null=True)
    idcarburant = models.ForeignKey(Carburant, models.DO_NOTHING, db_column='idCarburant', blank=True, null=True)
    idTransmission = models.ForeignKey(Transmission, models.DO_NOTHING, db_column='idTransmission', blank=True, null=True)
    image = models.BinaryField(blank=True, null=True)
    model = models.CharField(max_length=255, blank=True, null=True)
    seats = models.IntegerField(blank=True, null=True)
    doors = models.IntegerField(blank=True, null=True)
    power = models.TextField(blank=True, null=True) 
    price = models.FloatField(blank=True,null=True)
    clients = models.ManyToManyField('Client', through='Reservation')
    image_links = models.TextField(db_column="image_links",null=True)

    class Meta:
        managed = True
        db_table = 'voiture'


class Reservation(models.Model):
    id = models.AutoField(db_column='id_res',primary_key=True)
    idcar = models.ForeignKey(Voiture,db_column="idCar",on_delete=models.CASCADE)
    iduser = models.ForeignKey(Client,db_column="idUser",on_delete=models.CASCADE)
    date_depart = models.DateField(blank=True, null=True)
    date_arr = models.DateField(blank=True, null=True)
    message = models.CharField(max_length=255,blank=True,null=True)
    status = models.BooleanField(db_column="status",null=True,blank=True)
    price = models.FloatField(db_column="price",null=True,blank=True)
    class Meta:
        managed = True
        db_table = 'reservation'
        unique_together = (('idcar', 'iduser'),)
