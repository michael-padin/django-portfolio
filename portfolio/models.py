from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name



class Task(models.Model):
    name = models.CharField(max_length=255)
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_base64 = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title


class Customer(models.Model):
    name = models.CharField(max_length=100)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, default=1)
    address = models.CharField(max_length=200)
    email = models.EmailField()
    card_number = models.CharField(max_length=16)
    expiry_date = models.DateField()
    cvc = models.CharField(max_length=4)

    def __str__(self):
        return self.name